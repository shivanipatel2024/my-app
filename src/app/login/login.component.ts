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
  constructor(private authService: AuthService, private router: Router) {}
  onSubmit(): void {
    this.authService.login(this.requestLoginData).subscribe(
      () => {
        this.router.navigate(['/']); // Redirect to the dashboard after successful login
      },
      (error) => {
        console.error(error);
        // Handle error (e.g., display a message to the user)
      }
    );
  }
}
