import { Component, OnInit, Input, Output, EventEmitter,ViewChild, ElementRef,  HostListener } from '@angular/core';
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
  @Input() categories: ICategory[] = [];
  @Input() images: string[] = [];
  @Output() categorySelected = new EventEmitter<string>();
  @Output() imageClicked = new EventEmitter<{ images: string[], index: number }>();
  @ViewChild('scrollableCategoryList') scrollableCategoryList!: ElementRef<HTMLDivElement>;
  // categories: ICategory[] = [];
  // images: string[] = [];
  selectedCategory: string | null = null;
  selectedImages: string[] = [];
  showImageSlider = false;
  startIndex = 0;

  showLeftArrow = false;
  showRightArrow = true;

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
      this.categorySelected.emit(categoryName);
    });
  }

  getCategoryCoverImage(){
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

  @HostListener('window:resize')
  checkScroll(): void {
    const element = this.scrollableCategoryList.nativeElement;
    this.showLeftArrow = element.scrollLeft > 0;
    this.showRightArrow = element.scrollWidth > element.clientWidth + element.scrollLeft;
  }

  scrollLeft(): void {
    const element = this.scrollableCategoryList.nativeElement;
    element.scrollBy({ left: -150, behavior: 'smooth' });
    this.checkScroll();
  }

  scrollRight(): void {
    const element = this.scrollableCategoryList.nativeElement;
    element.scrollBy({ left: 150, behavior: 'smooth' });
    this.checkScroll();
  }
}