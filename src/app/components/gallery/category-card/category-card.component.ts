import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {
  @Input() categoryName: string = '';
  @Input() categoryImage: string = '';
  @Input() selectedCategory: string | null = null;
  @Output() categorySelected = new EventEmitter<string>();

  loadCategoryImages(): void {
    this.categorySelected.emit(this.categoryName);
  }
}
