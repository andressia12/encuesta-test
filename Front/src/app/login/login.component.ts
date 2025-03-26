import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  nombre = '';
  registrar = false;
  error = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  async login() {
    try {
      const response = await this.authService.login({ email: this.email, password: this.password });
      console.log('Usuario autenticado', response.data);
    } catch (error) {
      this.error = 'Credenciales incorrectas';
    }
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }

  mostrarRegistro() {
    this.registrar = true;
  }
}
