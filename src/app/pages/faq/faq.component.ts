import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements AfterViewInit {

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.initializeAccordion();
  }

  initializeAccordion() {
    const accordionButtons = document.querySelectorAll('[data-accordion-target]');

    accordionButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId : any = button.getAttribute('data-accordion-target');
        const target = document.querySelector(targetId);

        if (target) {
          const isOpen = target.classList.contains('hidden');
          this.closeAllAccordions();
          if (isOpen) {
            target.classList.remove('hidden');
            button.setAttribute('aria-expanded', 'true');
          } else {
            target.classList.add('hidden');
            button.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });

    this.cdr.detectChanges();
  }

  closeAllAccordions() {
    const accordionContents = document.querySelectorAll('[id^="accordion-flush-body-"]');
    const accordionButtons = document.querySelectorAll('[data-accordion-target]');

    accordionContents.forEach(content => {
      content.classList.add('hidden');
    });

    accordionButtons.forEach(button => {
      button.setAttribute('aria-expanded', 'false');
    });
  }
}

