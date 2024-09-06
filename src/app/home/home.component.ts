import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ShowListComponent } from '../show-list/show-list.component';
import { UsersComponent } from '../users/users.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, UsersComponent, ShowListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
