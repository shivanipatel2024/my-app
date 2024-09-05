import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';

import { ShowListComponent } from './show-list/show-list.component';

import { UsersComponent } from './users/users.component';
import { ApiService } from './api.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

UsersComponent;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ShowListComponent,
    UsersComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ApiService, HttpClient],
})
export class AppComponent {
  title = 'my-app';
}
