import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-details',
  standalone: true,
  imports: [],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css',
})
export class ShowDetailsComponent {
  @Input() show: any;
  constructor() {}
}
