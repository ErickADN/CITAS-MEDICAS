import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CitasComponent } from './pages/citas/citas.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { ButtonOptionMenuComponent } from './shared/components/button-option-menu/button-option-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    UsuariosComponent,
    CitasComponent,
    PacientesComponent,
    ButtonOptionMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
