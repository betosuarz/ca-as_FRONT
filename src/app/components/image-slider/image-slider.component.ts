import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent implements OnInit {
  slides = [
    { image: 'assets/gallery/sepulcro/SEPULCRO-1-scaled.jpg' },
    { image: 'assets/gallery/sepulcro/SEPULCRO-2-scaled.jpg' },
    { image: 'assets/gallery/sepulcro/SEPULCRO-25-scaled.jpg' },
  ];

  currentIndex = 0;

  ngOnInit(): void {
    this.updateImageSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateImageSize();
  }

  updateImageSize() {}

  goToSlide(index: number) {
    const previousIndex = this.currentIndex;
    this.currentIndex = index;
    
    gsap.to(`.carousel-image-${previousIndex}`, {
      opacity: 0,
      scale: 1.05,
      duration: 2, // 2 секунды
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.to(`.carousel-image-${this.currentIndex}`, {
          opacity: 1,
          scale: 1,
          duration: 2, // 2 секунды
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

  closeCarousel() {}
}
