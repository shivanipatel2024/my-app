import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
  // { path: '', component: AppComponent },
  {
    path: 'User',
    component: UsersComponent,
  },
  {
    path: 'User',
    component: UsersComponent,
  },
  { path: '**', redirectTo: '' },
];
