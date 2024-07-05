import { Component } from '@angular/core';
import { ImageSliderComponent } from '../../components/image-slider/image-slider.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageSliderComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
