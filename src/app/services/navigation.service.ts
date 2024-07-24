import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) {}

  isHomePage(): boolean {
    return this.router.url === '/' || this.router.url === '/home';
  }

  isTargetPage(): boolean {
    return this.router.url === '/faq';
  }
}
