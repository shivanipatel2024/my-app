import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { signUpDataType } from '../types/RequestData.types';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private apiServices: ApiService, private router: Router) {}
  requestSignUpData: signUpDataType = {
    email: '',
    password: '',
    mobileNumber: '',
  };
  passwordVisible: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';
  togglePasswordVisible() {
    this.passwordVisible = !this.passwordVisible;
  }

  submitRegisterForm(): void {
    this.isLoading = true;

    this.apiServices.registerUser(this.requestSignUpData).subscribe(
      (response) => {
        this.isLoading = false;
        if (response.isSuccess) {
          this.router.navigate(['/Login']);
        } else {
          this.errorMessage = response.message;
        }
      },
      (error) => {
        this.isLoading = false;
        console.error(error);
        this.errorMessage =
          'An error occurred during Register. Please try again later.';
      }
    );
  }

  onEmailBlur(emailControl: NgModel): void {
    if (emailControl.valid) {
      this.apiServices.checkUniqueEmail(this.requestSignUpData.email).subscribe(
        (response) => {
          if (response.isSuccess) {
            emailControl.control.setErrors({ notUnique: true });
            emailControl.control.markAllAsTouched();
            emailControl.control.markAsDirty();
          } else {
            emailControl.control.setErrors(null);
          }
        },
        (error) => {
          console.error(error);
          this.errorMessage = 'An error occurred. Please try again later.';
        }
      );
    }
  }

  onMobileBlur(mobileControl: NgModel): void {
    if (mobileControl.valid) {
      this.apiServices
        .checkUniqueMobile(this.requestSignUpData.mobileNumber)
        .subscribe(
          (response) => {
            if (response.isSuccess) {
              mobileControl.control.setErrors({ notUnique: true });
              mobileControl.control.markAllAsTouched();
              mobileControl.control.markAsDirty();
            } else {
              mobileControl.control.setErrors(null);
            }
          },
          (error) => {
            console.error(error);
            this.errorMessage = 'An error occurred. Please try again later.';
          }
        );
    }
  }
}
