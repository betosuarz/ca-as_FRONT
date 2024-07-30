import { Component, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-abbey',
  standalone: true,
  templateUrl: './abbey.component.html',
  styleUrl: './abbey.component.css'
})
export class AbbeyComponent implements AfterViewInit {
  ngAfterViewInit() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const navLink = document.querySelector(`a[href="abbey#${id}"]`);
        if (entry.isIntersecting) {
          navLink?.classList.add('active');
        } else {
          navLink?.classList.remove('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('div[id]').forEach((section) => {
      observer.observe(section);
    });
  }

}
