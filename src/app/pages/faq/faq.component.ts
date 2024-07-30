import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.initializeFlowbiteAccordion();
  }

  initializeFlowbiteAccordion(): void {
    // Reemplaza esto con el código de inicialización específico de Flowbite
    const accordions = document.querySelectorAll('[data-accordion]');
    accordions.forEach((accordion) => {
      const targetId = accordion.getAttribute('data-accordion-target');
      const target = targetId ? document.querySelector(targetId) : null;
      const isActive = accordion.getAttribute('aria-expanded') === 'true';

      if (isActive && target) {
        target.classList.remove('hidden');
      }

      accordion.addEventListener('click', () => {
        if (target) {
          const isCurrentlyHidden = target.classList.contains('hidden');
          if (isCurrentlyHidden) {
            target.classList.remove('hidden');
            accordion.setAttribute('aria-expanded', 'true');
          } else {
            target.classList.add('hidden');
            accordion.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });
  }
}

