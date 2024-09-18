import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  constructor(private apiServices: ApiService) {}

  forgotPasswordData: any = {
    email: '',
  };
  isLoading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  sendEmail(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';
    this.apiServices
      .sendForgotPasswordEmail(this.forgotPasswordData.email)
      .subscribe(
        (response) => {
          this.isLoading = false;
          if (response.isSuccess) {
            this.successMessage = response.message;
          } else {
            this.errorMessage = response.message;
          }
        },
        (error) => {
          this.isLoading = false;
          console.error(error);
          this.errorMessage =
            'An error occurred while sending email . Please try again later.';
        }
      );
  }
}
/*  onSubmit(): void {
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
        console.error(error);
        this.errorMessage =
          'An error occurred during login. Please try again later.';
      }
    );
  } */
