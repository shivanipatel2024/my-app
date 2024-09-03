import { Component, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-show-dialog',
  templateUrl: './show-dialog.component.html',
  styleUrls: ['./show-dialog.component.css'],
})
export class ShowDialogComponent {
  @Input() show: any = null;

  @ViewChild('modal') modal!: ElementRef;

  // Open the modal and accept data
  openModal(show: any) {
    this.show = show; // Set the data for the modal
    if (this.modal) {
      ($(this.modal.nativeElement) as any).modal('show');
    }
  }

  closeModal() {
    if (this.modal) {
      ($(this.modal.nativeElement) as any).modal('hide');
    }
  }
}
