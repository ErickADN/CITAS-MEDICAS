import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CitasComponent } from './pages/citas/citas.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, //home
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'citas', component: CitasComponent },
  { path: 'pacientes', component: PacientesComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' } //** -> cualquier cosa redirige a home/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
