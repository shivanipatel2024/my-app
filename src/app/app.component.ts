import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowListComponent } from './show-list/show-list.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { JwtServices } from './services/jwt.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ShowListComponent,
    UsersComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    FormsModule,
    SignupComponent,
    CommonModule,
    ResetPasswordComponent,
    ForgotPasswordComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AuthService, ApiService, JwtServices],
})
export class AppComponent {
  title = 'my-app';
}
