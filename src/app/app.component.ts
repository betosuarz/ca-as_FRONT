import { Component, Renderer2 } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FloatingTabComponent } from './components/floating-tab/floating-tab.component';
import { NavigationService } from './services/navigation.service';
import { VideoComponent } from './components/video/video.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FloatingTabComponent, VideoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'canas_FRONT';
  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    initFlowbite();
  }

  isHomePage(): boolean {
    return this.navigationService.isHomePage();
  }

  isTargetPage(): boolean {
    return this.navigationService.isTargetPage();
  }


}
