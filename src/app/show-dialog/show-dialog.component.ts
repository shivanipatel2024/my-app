import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { lstat } from 'fs';
@Component({
  selector: 'app-show-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-dialog.component.html',
  styleUrl: './show-dialog.component.css',
})
export class ShowDialogComponent {
  @Input() show: any;

  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  isPlaying = true;
  progress = 0;
  isMute = false;
  currentTime = '0:00';
  duration = '0:00';

  togglePlayPause() {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    if (video.paused || video.ended) {
      video.play();
      this.isPlaying = true;
    } else {
      video.pause();
      this.isPlaying = false;
    }
  }

  toggleMuteUnMute() {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    video.muted = !video.muted;
    this.isMute = video.muted;
  }
  seek(event: Event) {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    const input = event.target as HTMLInputElement;
    const time = (parseFloat(input.value) / 100) * video.duration;
    video.currentTime = time;
  }

  updateProgress() {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    this.progress = (video.currentTime / video.duration) * 100;
    this.currentTime = this.formatTime(video.currentTime);
  }
  initializeVideo() {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;

    this.duration = this.formatTime(video.duration);

    video.play();

    this.progress = 0;
    this.isPlaying = true;

    video.onended = () => {
      video.currentTime = 0;
      video.play();
    };
  }
  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  


}
