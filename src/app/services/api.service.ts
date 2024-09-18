import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { signUpDataType } from '../types/RequestData.types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrlFetch = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getShows(): Observable<any> {
    return this.http.get(`${this.apiUrlFetch}/NetflixShows`);
  }

  getShow(id: number): Observable<any> {
    return this.http.get(`${this.apiUrlFetch}/NetflixShows/${id}`);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrlFetch}/users`);
  }
  addUser(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrlFetch, user, { headers });
  }

  private apiUrl = 'https://localhost:7262';

  registerUser(signUpData: signUpDataType): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Auth/RegisterUser`, signUpData);
  }

  sendForgotPasswordEmail(email: string): Observable<any> {
    const params = new HttpParams().set('email', email);
    return this.http.post<any>(
      `${this.apiUrl}/Auth/SendForgotPasswordEmail`,
      null,
      { params }
    );
  }

  /*import { HttpParams } from '@angular/common/http';

sendForgotPasswordEmail(email: string): Observable<any> {
  const params = new HttpParams().set('email', email);
  return this.http.post<any>(
    `${this.apiUrl}/Auth/SendForgotPasswordEmail`,
    null,
    { params }
  );
} */
  checkUniqueEmail(email: string) {
    return this.http.get<any>(
      `${this.apiUrl}/Auth/CheckUniqueEmail?email=${email}`
    );
  }
  checkUniqueMobile(mobile: string): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/Auth/CheckUniqueMobile?mobile=${mobile}`
    );
  }
}
//https://localhost:7262/Auth/SendForgotPasswordEmail?email=shivanidpatel209%40gmail.com
