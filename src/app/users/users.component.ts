import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  providers: [],
})
export class UsersComponent {
  users: any = [];
  constructor() {}
  ngOnInit(): void {
    // this.apiServices.getUsers().subscribe((data) => {
    //   this.users = data;
    // });
  }
}
