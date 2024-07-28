import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef  } from '@angular/core';

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
}
