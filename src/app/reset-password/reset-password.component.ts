import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtServices } from '../services/jwt.service';
import { resetPasswordDataType } from '../types/RequestData.types';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
})
export class ResetPasswordComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jwtServices: JwtServices
  ) {}

  resetPasswordData: resetPasswordDataType = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  token: string = '';
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;
  togglePasswordVisible() {
    this.passwordVisible = !this.passwordVisible;
  }
  toggleConfirmPasswordVisible() {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  matchConfirmPassword(){
    
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token') || '';
    const decodedToken: any = this.jwtServices.jwtTokenDecode(this.token);

    if (!decodedToken) {
      this.router.navigate(['/Login']);
      return;
    }
    if (decodedToken && decodedToken.exp) {
      const expirationTime = decodedToken.exp * 1000;
      const currentTime = Date.now();
      if (currentTime > expirationTime) {
        this.router.navigate(['/Login']);
        return;
      }
      this.resetPasswordData.email = decodedToken.Email;
    }
  }
}
/*this.token = this.route.snapshot.paramMap.get('token') || '';
 const decodedToken = this.jwtServices.jwtTokenDecode(this.token);

 if (!decodedToken) {
   // Token is invalid or cannot be decoded, redirect to login component
   this.router.navigate(['/login']);
   return;
 }

 // Check if token is expired
 const expirationTime = decodedToken.exp * 1000; // Convert seconds to milliseconds
 const currentTime = Date.now();

 if (currentTime > expirationTime) {
   // Token is expired, redirect to login component
   this.router.navigate(['/login']);
   return;
 }

 // Token is valid, extract username claim
 this.username = decodedToken.username;
/*
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: '<p>Product Detail {{ id }}</p>'
})
export class ProductDetailComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }
} */
