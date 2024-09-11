import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { loginDataType } from '../types/RequestData.types';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [],
})
export class LoginComponent {
  requestLoginData: loginDataType = {
    userName: '',
    password: '',
  };
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  onSubmit(): void {
    this.authService.login(this.requestLoginData).subscribe(
      (response) => {
        if (response.isSuccess) {
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Invalid username or Password.';
        }
      },
      (error) => {
        console.error(error);
        this.errorMessage =
          'An error occurred during login. Please try again later.';
      }
    );
  }
}
