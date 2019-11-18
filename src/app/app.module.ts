import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PrincipalComponent } from './componentes/partes/principal/principal.component';
import { LoginComponent } from './componentes/partes/login/login.component';
import { BuscarVehiculoComponent } from './componentes/partes/buscar-vehiculo/buscar-vehiculo.component';
import { ListarVehiculosComponent } from './componentes/partes/listar-vehiculos/listar-vehiculos.component';
import { IngresarVehiculoComponent } from './componentes/partes/ingresar-vehiculo/ingresar-vehiculo.component';
import { LoginService } from './servicios/login.service';
import { TipovehiculoService } from './servicios/tipovehiculo.service';
import { VehiculoService } from './servicios/vehiculo.service';

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
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService, TipovehiculoService, VehiculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
