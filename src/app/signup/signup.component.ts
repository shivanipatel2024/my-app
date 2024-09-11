import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { signUpDataType } from '../types/RequestData.types';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  requestSignUpData: signUpDataType = {
    email: '',
    password: '',
    mobileNumber: '',
  };
}
