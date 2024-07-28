import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent implements AfterViewInit {
  isPlaying = false;

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.videoPlayer.nativeElement.muted = true;
    this.playVideo();

    //pointer events
    // this.videoPlayer.nativeElement.addEventListener('pointerdown', this.onPointerDown.bind(this));
    // this.videoPlayer.nativeElement.addEventListener('pointerup', this.onPointerUp.bind(this));
  }

  handleLoadedMetadata(event: Event) {
    const video = event.target as HTMLVideoElement;
    video.muted = true;
  }

  handleCanPlay(event: Event) {
    const video = event.target as HTMLVideoElement;
    video.play().catch(error => console.error('Autoplay error:', error));
  }

  playVideo() {
    this.videoPlayer.nativeElement.play().then(() => {
      this.isPlaying = true;
      this.cdr.detectChanges();
    }).catch(error => {
      console.error('Autoplay error:', error);
    });
  }

  pauseVideo() {
    this.videoPlayer.nativeElement.pause();
    this.isPlaying = false;
    this.cdr.detectChanges();
  }

  // onPointerDown(event: PointerEvent) {
  //   event.preventDefault();
  //   this.videoPlayer.nativeElement.setPointerCapture(event.pointerId);
  // }

  // onPointerUp(event: PointerEvent) {
  //   this.videoPlayer.nativeElement.releasePointerCapture(event.pointerId);
  // }
}
