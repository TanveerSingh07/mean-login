import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isRegister = false;

  formData = {
    name: '',
    collegeId: '',
    email: '',
    password: ''
  };

  loading = false;
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  handleLogin() {
    if (!this.formData.email || !this.formData.password) {
      this.error = "Email and password required";
      return;
    }

    this.loading = true;

    this.auth.login(this.formData).subscribe({
      next: (res: any) => {
        this.auth.setToken(res.token);
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.error = "Invalid credentials";
        this.loading = false;
      }
    });
  }

  handleRegister() {
    if (!this.formData.name || !this.formData.collegeId ||
        !this.formData.email || !this.formData.password) {
      this.error = "All fields required";
      return;
    }

    this.loading = true;

    this.auth.register(this.formData).subscribe({
      next: () => {
        alert("Registered successfully");
        this.isRegister = false;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error.message;
        this.loading = false;
      }
    });
  }

  toggleMode() {
    this.isRegister = !this.isRegister;
    this.error = '';
    this.formData = { name: '', collegeId: '', email: '', password: '' };
  }
}