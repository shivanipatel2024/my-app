import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
 
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/Login']);
      return false;
    }
  }
}

