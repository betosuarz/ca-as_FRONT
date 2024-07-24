import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }

  private reinitializeSubject = new Subject<void>();

  get reinitialize$() {
    return this.reinitializeSubject.asObservable();
  }

  reinitializeCarousel(): void {
    this.reinitializeSubject.next();
  }
}
