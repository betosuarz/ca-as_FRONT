import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  constructor() { }

  private sideMenuOpenSignal = signal<boolean>(false);

  toggleSideMenu(): void {
    this.sideMenuOpenSignal.set(!this.sideMenuOpenSignal());
  }

  setSideMenuState(state: boolean): void {
    this.sideMenuOpenSignal.set(state);
  }

  get sideMenuOpen$() {
    return computed(() => this.sideMenuOpenSignal());
  }

}
