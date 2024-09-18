import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { loginDataType } from '../types/RequestData.types';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [],
})
export class LoginComponent {
  requestLoginData: loginDataType = {
    userName: '',
    password: '',
  };
  passwordVisible: boolean = false;
  isLoading: boolean = false;
  togglePasswordVisible() {
    this.passwordVisible = !this.passwordVisible;
  }

  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  onSubmit(): void {
    this.isLoading = true;
    this.authService.login(this.requestLoginData).subscribe(
      (response) => {
        this.isLoading = false;
        if (response.isSuccess) {
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'Invalid username or Password.';
        }
      },
      (error) => {
        this.isLoading = false;
        console.error(error);
        this.errorMessage =
          'An error occurred during login. Please try again later.';
      }
    );
  }
}
