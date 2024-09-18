import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ShowListComponent } from './show-list/show-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: ShowListComponent,
        pathMatch: 'full',
      },
      {
        path: 'User',
        component: UsersComponent,
      },
    ],
  },
  {
    path: 'Login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'SignUp',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'ForgotPassword',
    component: ForgotPasswordComponent,
    pathMatch: 'full',
  },
  {
    path: 'ResetPassword/:token',
    component: ResetPasswordComponent,
    pathMatch: 'full',
  },

  { path: '**', component: PageNotFoundComponent },
];
