import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import { loginDataType } from './types/RequestData.types';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //https://localhost:7262/Auth/LoginUser
  private apiUrl = 'https://localhost:7262';
  isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private http: HttpClient,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  login(loginData: loginDataType): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Auth/LoginUser`, loginData).pipe(
      tap((response) => {
        if (this.isBrowser && response.isSuccess) {
          if (response && response.data.token) {
            localStorage.setItem('jwt_token', response.data.token);
          }
        }
      })
    );
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem('jwt_token');
      this.router.navigate(['/Login']);
    }
  }

  getToken(): string {
    if (this.isBrowser) {
      return localStorage.getItem('jwt_token') || '';
    } else return '';
  }

  getDecodedToken(): any {
    const token = this.getToken();
    return token ? jwt_decode.jwtDecode(token) : null;
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken = this.getDecodedToken();
      if (decodedToken && decodedToken.exp) {
        const expirationTime = decodedToken.exp * 1000;
        const currentTime = Date.now();

        if (currentTime > expirationTime) {
          this.logout();
          return false;
        }
        return true;
      }
    }
    return false;
  }
}
