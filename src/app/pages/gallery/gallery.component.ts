import { Component, OnInit } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ImageSliderComponent } from '../../components/gallery/image-slider/image-slider.component';
import { CategoryCardComponent } from '../../components/gallery/category-card/category-card.component';
import { GalleryService } from '../../services/gallery.service';
import { ICategory } from '../../interfaces/icategory';


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageSliderComponent, CategoryCardComponent, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [TitleCasePipe]
})

export class GalleryComponent implements OnInit {
  categories: ICategory[] = [];
  images: string[] = [];
  selectedCategory: string | null = null;
  selectedImages: string[] = [];
  showImageSlider = false;
  startIndex = 0;

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.galleryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });

    this.loadAllImages();
  }

  loadAllImages(): void {
    this.galleryService.getAllImages().subscribe(images => {
      this.images = images;
      this.selectedCategory = null;
    });
  }

  loadCategoryImages(categoryName: string): void {
    this.galleryService.getImagesByCategory(categoryName).subscribe(images => {
      this.images = images;
      this.selectedCategory = categoryName;
    });
  }

  openImageSlider(images: string[], index: number): void {
    this.selectedImages = images;
    this.startIndex = index;
    this.showImageSlider = true;
  }

  closeImageSlider(): void {
    this.showImageSlider = false;
  }
}