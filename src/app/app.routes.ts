import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ShowListComponent } from './show-list/show-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
   // canActivate: [authGuard],
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
  },

  { path: '**', component: PageNotFoundComponent },
];
