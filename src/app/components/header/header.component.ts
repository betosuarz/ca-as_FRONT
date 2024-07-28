import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PoliticsComponent } from '../head/politics/politics.component';
import { SideMenuComponent } from "../side-menu/side-menu.component";
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    PoliticsComponent,
    SideMenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isSideMenuOpen = false;
  
  constructor(private navigationService: NavigationService) {}

  isHomePage(): boolean {
    return this.navigationService.isHomePage();
  }

  toggleSideMenu(): void {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }

  handleMenuClosed(): void {
    this.isSideMenuOpen = false;
  }
}
