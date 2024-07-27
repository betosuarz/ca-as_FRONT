import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICategory } from '../interfaces/icategory';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private basePath = 'assets/img-gallery';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<ICategory[]> {
    return this.http.get<{ categories: ICategory[] }>(`${this.basePath}/images.json`).pipe(
      map(response => response.categories.map(category => ({
        ...category,
        coverImage: category.images.length ? `${this.basePath}/${encodeURIComponent(category.name)}/${encodeURIComponent(category.images[0])}` : `${this.basePath}/default.jpg`
      })))
    );
  }

//return img-gallery/default.jpg image if category is not found


  getImagesByCategory(categoryName: string): Observable<string[]> {
    return this.getCategories().pipe(
      map(categories => {
        const category = categories.find(cat => cat.name === categoryName);
        return category ? category.images.map(image => `${this.basePath}/${categoryName}/${image}`) : [];
      })
    );
  }

  getAllImages(): Observable<string[]> {
    return this.getCategories().pipe(
      map(categories => {
        return categories.reduce((allImages, category) => {
          const categoryImages = category.images.map(image => `${this.basePath}/${category.name}/${image}`);
          return allImages.concat(categoryImages);
        }, [] as string[]);
      })
    );
  }
}
