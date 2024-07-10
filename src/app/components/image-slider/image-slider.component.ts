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
export class ImageSliderComponent{
  slides = [
    { image: 'assets/gallery/sepulcro/SEPULCRO-1-scaled.jpg' },
    { image: 'assets/gallery/sepulcro/SEPULCRO-2-scaled.jpg' },
    { image: 'assets/gallery/sepulcro/SEPULCRO-25-scaled.jpg' },
  ];

  currentIndex = 0;
  showCarousel = true;
  isLandscape = false;
  //autoplay
  autoplayInterval: any;
  autoplayEnabled = false;

  constructor() {
    this.detectOrientation();
    this.detectMobileDevice();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.detectOrientation();
    this.detectMobileDevice();
  }

  detectOrientation() {
    if (window.innerHeight > window.innerWidth) {
      document.body.classList.add('portrait');
      document.body.classList.remove('landscape');
    } else {
      document.body.classList.add('landscape');
      document.body.classList.remove('portrait');
    }
  }

  detectMobileDevice() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      document.body.classList.add('mobile');
    } else {
      document.body.classList.remove('mobile');
    }
  }


  goToSlide(index: number) {
    const previousIndex = this.currentIndex;
    this.currentIndex = index;
  
    const prevElement = document.querySelector(`.carousel-image-${previousIndex}`);
    const currentElement = document.querySelector(`.carousel-image-${this.currentIndex}`);
  
    if (prevElement && currentElement) {
      gsap.to(prevElement, {
        opacity: 0,
        scale: 1.05,
        duration: 2, // 2 seconds
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.to(currentElement, {
            opacity: 1,
            scale: 1,
            duration: 2, // 2 seconds
            ease: 'power2.inOut'
          });
        }
      });
    }
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

  //methods for autoplay
  startAutoplay(){
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  stopAutoplay(){
    clearInterval(this.autoplayInterval);
  }

  toggleAutoplay(){
    this.autoplayEnabled = !this.autoplayEnabled;
    if(this.autoplayEnabled) {
      this.startAutoplay();
    } else {
      this.stopAutoplay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  
}
