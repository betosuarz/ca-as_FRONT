import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {
  
  // slides = [
  //   { image: 'assets/gallery/sepulcro/SEPULCRO-1-scaled.jpg', text: '1' },
  //   { image: 'assets/gallery/sepulcro/SEPULCRO-2-scaled.jpg', text: '2' },
  //   { image: 'src/assets/gallery/sepulcro/SEPULCRO-25-scaled.jpg', text: '3' },
  // ];
  // currentSlide = 0;

  // nextSlide(): void {
  // }

  // previousSlide(): void {
  // }

  // goToSlide(index: number): void {
  // }

}
