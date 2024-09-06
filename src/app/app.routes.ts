import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AppComponent } from './app.component';
import { ShowListComponent } from './show-list/show-list.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
  // { path: '', component: AppComponent },
  {
    path: '',
    component: ShowListComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'User',
    component: UsersComponent,
  },
  { path: '**', redirectTo: '' },
 
];
