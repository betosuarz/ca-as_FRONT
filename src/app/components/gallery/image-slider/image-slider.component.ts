import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent{
  @Input() slides: string[] = [];
  @Input() startIndex = 0;
  @Output() close = new EventEmitter<void>();


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

  ngOnInit(): void {
    this.currentIndex = this.startIndex;
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
    
    const prevThumbnail = document.querySelector(`.thumbnails img:nth-child(${previousIndex + 1})`);
    const currentThumbnail = document.querySelector(`.thumbnails img:nth-child(${this.currentIndex + 1})`);

    if (prevThumbnail && currentThumbnail) {
      gsap.to(prevThumbnail, {
        scale: 1,
        duration: 2, // 2 seconds
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.to(currentThumbnail, {
            scale: 1.4,
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
    this.close.emit();
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

  //thumbnails

  getVisibleThumbnails(): string[] {
    const visibleThumbnailsCount = window.innerWidth <= 767 ? 3 : 5;
    const startIndex = Math.max(0, this.currentIndex - 2);
    const endIndex = Math.min(this.slides.length, startIndex + visibleThumbnailsCount);
    return this.slides.slice(startIndex, endIndex);
  }

  
}
