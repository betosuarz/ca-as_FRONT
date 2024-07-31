import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { GalleryService } from './gallery.service';

@Injectable({
  providedIn: 'root',
})
export class ImagePreloaderService {
  private imagesUrl = 'assets/images.json';

  constructor(private http: HttpClient, private galleryService: GalleryService) {}

  preloadImages() {
    forkJoin({
      jsonImages: this.getImages(),
      galleryImages: this.galleryService.getAllImages()
    }).pipe(
      map(({ jsonImages, galleryImages }) => [...jsonImages.images, ...galleryImages])
    ).subscribe((images: string[]) => {
      console.log('Images to preload:', images);
      images.forEach((image) => {
        const img = new Image();
        img.src = image;
        console.log('Preloading image:', image);
      });
    });
  }

  private getImages(): Observable<{ images: string[] }> {
    return this.http.get<{ images: string[] }>(this.imagesUrl);
  }
}