import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ShowDetailsComponent } from '../show-details/show-details.component';
import { ShowDialogComponent } from '../show-dialog/show-dialog.component';
import * as bootstrap from 'bootstrap';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [CommonModule, ShowDetailsComponent, ShowDialogComponent],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css',
  providers: [],
})
export class ShowListComponent {
  constructor(private apiServices: ApiService) {}
  showList: any = []
  selectedShow: any;
  selectShow(show: any) {
    this.selectedShow = show;
  }

  ngOnInit(): void {
    this.apiServices.getShows().subscribe((data) => {
      this.showList = data;
      this.selectedShow = data[0];
    });
  }

  showModal: any;
  openModal(show: any) {
    this.showModal = show;
    setTimeout(() => {
      $('#showModal').modal('show');
    }, 3000);
  }

  closeModal() {
    $('#showModal').modal('hide');
  }

  @ViewChild('showListRef') showListRef!: ElementRef;
  isDown = false;
  startX: number = 0;
  scrollLeft: number = 0;

  handleMouseDown = (e: MouseEvent) => {
    this.isDown = true;
    this.startX = e.pageX - this.showListRef.nativeElement.offsetLeft;
    this.scrollLeft = this.showListRef.nativeElement.scrollLeft;
  };

  handleMouseUpOrLeave = () => {
    this.isDown = false;
  };

  handleMouseMove = (e: MouseEvent) => {
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.showListRef.nativeElement.offsetLeft;
    const walk = x - this.startX;
    this.showListRef.nativeElement.scrollLeft = this.scrollLeft - walk;
  };
}
