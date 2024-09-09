import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import { loginDataType } from './types/RequestData.types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:7262/Login'; 

  constructor(private http: HttpClient) {}

  login(loginData: loginDataType): Observable<any> {
    // debugger;
   // console.log('Submitting:', loginData);
    return this.http.post<any>(`${this.apiUrl}/UserLogin`, loginData).pipe(
      tap((response) => {
        if (response && response.data.token) {
          localStorage.setItem('jwt_token', response.data.token);
          
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('jwt_token');
  }

  getToken(): string {
    return localStorage.getItem('jwt_token') || '';
  }

  getDecodedToken(): any {
    const token = this.getToken();
    return token ? jwt_decode.jwtDecode(token) : null;
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }
}
