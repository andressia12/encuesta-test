import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { EncuestaComponent } from './encuesta/encuesta.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent }, // Página de registro
  { path: 'encuesta', component: EncuestaComponent }  // Página de encuesta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
