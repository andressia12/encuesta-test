import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  public nombre = '';
  public email = '';
  public password = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  async registrarUsuario() {
    if (!this.nombre || !this.email || !this.password) {
      document.getElementById('error-msg')!.innerText = "Todos los campos son obligatorios";
      return;
    }

    try {
      await this.authService.register({ nombre: this.nombre, email: this.email, password: this.password });
      alert("Usuario registrado con éxito. Por favor complete la siguiente encuesta.");

      this.router.navigate(['/encuesta']);
    } catch (error) {
      document.getElementById('error-msg')!.innerText = "Error en el registro.";
    }
  }
}
