import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ShowListComponent } from './show-list/show-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
