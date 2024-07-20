import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {
  @Input() categoryName!: string;
  @Input() categoryImage!: string;
  @Input() imageOrientation: 'vertical' | 'horizontal' = 'horizontal';
}
