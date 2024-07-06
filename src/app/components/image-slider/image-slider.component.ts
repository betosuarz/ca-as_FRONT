import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { gsap } from 'gsap';
//hammer ???

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, AfterViewInit {
  slides = [
    { image: 'assets/gallery/sepulcro/SEPULCRO-1-scaled.jpg' },
    { image: 'assets/gallery/sepulcro/SEPULCRO-2-scaled.jpg' },
    { image: 'assets/gallery/sepulcro/SEPULCRO-25-scaled.jpg' },
  ];

  currentIndex = 0;
  showCarousel = true;
  isLandscape = false;


  ngOnInit(): void {
    this.updateImageSize();
    this.checkOrientation();
  }

  ngAfterViewInit(): void {
    this.checkOrientation();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateImageSize();
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event: any) {
    this.checkOrientation();
  }

  updateImageSize() {}

//in mobile always will show horizontal way to see gallery
  checkOrientation() {
    this.isLandscape = window.matchMedia("(orientation: landscape)").matches;
    const container = document.querySelector('.carousel-container') as HTMLElement;

    if (container) {
      if (this.isLandscape) {
        container.style.transform = "rotate(0deg)";
        container.style.width = "100vw";
        container.style.height = "100vh";
      } else {
        container.style.transform = "rotate(90deg)";
        container.style.width = "100vh";
        container.style.height = "100vw";
      }
    }
  }

  goToSlide(index: number) {
    const previousIndex = this.currentIndex;
    this.currentIndex = index;
    
    gsap.to(`.carousel-image-${previousIndex}`, {
      opacity: 0,
      scale: 1.05,
      duration: 2, // 2 seconds
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.to(`.carousel-image-${this.currentIndex}`, {
          opacity: 1,
          scale: 1,
          duration: 2, // 2 seconds
          ease: 'power2.inOut'
        });
      }
    });
  }

  nextSlide() {
    const nextIndex = (this.currentIndex + 1) % this.slides.length;
    this.goToSlide(nextIndex);
  }

  previousSlide() {
    const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(prevIndex);
  }

  closeCarousel() {
    this.showCarousel = false;
  }
}
