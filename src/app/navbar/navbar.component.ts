import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor() {}

  loOut(): any {
    //console.log('Loout button clicked! ');
    localStorage.removeItem('jwt_token');
  }
}
