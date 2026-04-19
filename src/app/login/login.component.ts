import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isRegister = false;
  loading = false;
  error = '';

  formData = {
    email: '',
    password: '',
    name: '',
    collegeId: ''
  };

  handleChange(event: any) {
    const { name, value } = event.target;
    this.formData[name as keyof typeof this.formData] = value;
    if (this.error) this.error = '';
  }

  handleLogin() {
    if (!this.formData.email.trim() || !this.formData.password) {
      this.error = 'Email and password are required';
      return;
    }

    this.loading = true;

    // Dummy simulation (since no backend required)
    setTimeout(() => {
      if (this.formData.email === 'test@college.edu' && this.formData.password === '123456') {
        alert(`Welcome back, User!`);
      } else {
        this.error = 'Invalid email or password';
      }
      this.loading = false;
    }, 1000);
  }

  handleRegister() {
    if (!this.formData.name.trim() || !this.formData.collegeId.trim() ||
        !this.formData.email.trim() || !this.formData.password) {
      this.error = 'All fields are required';
      return;
    }

    if (this.formData.password.length < 6) {
      this.error = 'Password must be at least 6 characters';
      return;
    }

    this.loading = true;

    setTimeout(() => {
      alert('Registration successful!');
      this.loading = false;
    }, 1000);
  }

  toggleMode() {
    this.isRegister = !this.isRegister;
    this.error = '';
    this.formData = { email: '', password: '', name: '', collegeId: '' };
  }
}