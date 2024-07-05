import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floating-tab',
  standalone: true,
  imports: [],
  templateUrl: './floating-tab.component.html',
  styleUrl: './floating-tab.component.css'
})
export class FloatingTabComponent {

  constructor(private router: Router) {}

  navigateToTarget(): void {
    this.router.navigate(['/faq']);
  }
}
