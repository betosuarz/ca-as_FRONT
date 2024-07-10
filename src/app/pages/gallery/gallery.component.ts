import { Component } from '@angular/core';
import { ImageSliderComponent } from '../../components/image-slider/image-slider.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageSliderComponent, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  categories = [
    { name: 'Exterior', image: 'assets/gallery/exterior/CANAS-EXTERIOR-3-scaled.jpg' }
  ];

}
