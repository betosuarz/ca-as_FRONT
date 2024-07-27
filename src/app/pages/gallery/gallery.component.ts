import { Component, OnInit, EventEmitter} from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ImageSliderComponent } from '../../components/gallery/image-slider/image-slider.component';
import { GalleryService } from '../../services/gallery.service';
import { ICategory } from '../../interfaces/icategory';


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageSliderComponent, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [TitleCasePipe]
})

export class GalleryComponent implements OnInit {
  categories: ICategory[] = [];
  images: string[] = [];
  categorySelected = new EventEmitter<string>();
  imageClicked = new EventEmitter<{ images: string[], index: number }>();
  selectedCategory: string | null = null;
  selectedImages: string[] = [];
  showImageSlider = false;
  startIndex = 0;
  coverImages: { [key: string]: string } = {};

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.galleryService.getCategories().subscribe(categories => {
      this.categories = categories;
      this.categories.forEach(category => {
        this.coverImages[category.name] = category.coverImage || 'assets/img-gallery/default.jpg';
        console.log(`Category: ${category.name}, Cover Image: ${this.coverImages[category.name]}`);
      });

      //default image for Todo
      this.coverImages['default'] = 'assets/img-gallery/default.jpg';
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
      this.categorySelected.emit(categoryName);
    });
  }

  getCategoryCoverImage(categoryName: string): string {
    return this.coverImages[categoryName] || this.coverImages['default'];
  }

  openImageSlider(images: string[], index: number): void {
    this.selectedImages = images;
    this.startIndex = index;
    this.showImageSlider = true;
    this.imageClicked.emit({ images, index });
  }

  closeImageSlider(): void {
    this.showImageSlider = false;
  }

  
}