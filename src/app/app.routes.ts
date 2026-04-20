import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './info/info.component'; // New feature component

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [AuthGuard] 
  },

  //Additional feature route (safe, no impact on main flow)
  { 
    path: 'info', 
    component: InfoComponent 
  },

  //Handles unknown routes
  { path: '**', redirectTo: 'login' }
];