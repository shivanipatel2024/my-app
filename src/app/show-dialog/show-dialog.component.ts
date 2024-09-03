import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-dialog',
  templateUrl: './show-dialog.component.html',
  styleUrls: ['./show-dialog.component.css'],
  standalone: true,
})
export class ShowDialogComponent {
  @Input() show: any = null;
}
