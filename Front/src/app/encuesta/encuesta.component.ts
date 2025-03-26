import { Component } from '@angular/core';

declare function validarFormulario(): boolean;

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent {
  pais: string = '';
  nacionalidad: string = '';
  sexo: string = '';
  edad: number | null = null;
  viajaCon: string = '';
  otroViaje: string = '';
  numPersonas: number | null = null;

  constructor() {}

  validarPregunta4() {
    if (this.viajaCon === 'Solo') {
      this.numPersonas = 1;
    }
  }

  guardarEncuesta(event: Event) {
    event.preventDefault();

    if (!validarFormulario()) {
      document.getElementById('error-msg')!.innerText = "Por favor, complete todos los campos correctamente.";
      return;
    }

    alert("Encuesta guardada exitosamente!");
  }
}
