import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatingTabComponent } from './components/floating-tab/floating-tab.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FloatingTabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'canas_FRONT';

  ngOnInit(): void {
    initFlowbite();
  }

  constructor(private router: Router) {}

  isTargetPage(): boolean {
    return this.router.url === '/faq';
  }

}
