import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PrincipalComponent } from './componentes/partes/principal/principal.component';
import { LoginComponent } from './componentes/partes/login/login.component';
import { BuscarVehiculoComponent } from './componentes/partes/buscar-vehiculo/buscar-vehiculo.component';
import { ListarVehiculosComponent } from './componentes/partes/listar-vehiculos/listar-vehiculos.component';
import { IngresarVehiculoComponent } from './componentes/partes/ingresar-vehiculo/ingresar-vehiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PrincipalComponent,
    LoginComponent,
    BuscarVehiculoComponent,
    ListarVehiculosComponent,
    IngresarVehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
