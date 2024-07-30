import { CommonModule } from '@angular/common';
import { Component, Input, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

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
  @Input() menuOpen = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.videoPlayer.nativeElement.muted = true;
    this.setVideoSource();
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

  togglePlayPause() {
    if (this.isPlaying) {
      this.pauseVideo();
    } else {
      this.playVideo();
    }
  }

  private setVideoSource() {
    const videoPlayer = this.videoPlayer.nativeElement;
    const sources = videoPlayer.getElementsByTagName('source');

    for (let i = 0; i < sources.length; i++) {
      const source = sources[i];
      if (window.matchMedia(source.media).matches) {
        videoPlayer.src = source.src;
        break;
      }
    }

    videoPlayer.load();
  }

  // onPointerDown(event: PointerEvent) {
  //   event.preventDefault();
  //   this.videoPlayer.nativeElement.setPointerCapture(event.pointerId);
  // }

  // onPointerUp(event: PointerEvent) {
  //   this.videoPlayer.nativeElement.releasePointerCapture(event.pointerId);
  // }
}
