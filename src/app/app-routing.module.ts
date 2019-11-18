import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/partes/login/login.component';
import { BuscarVehiculoComponent } from './componentes/partes/buscar-vehiculo/buscar-vehiculo.component';
import { ListarVehiculosComponent } from './componentes/partes/listar-vehiculos/listar-vehiculos.component';
import { IngresarVehiculoComponent } from './componentes/partes/ingresar-vehiculo/ingresar-vehiculo.component';
import { PrincipalComponent } from './componentes/partes/principal/principal.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
    {path: 'buscar-vehiculo', component:  BuscarVehiculoComponent},
    {path: 'listar-vehiculos', component: ListarVehiculosComponent},
    {path: 'ingresar-vehiculo', component: IngresarVehiculoComponent},
    {path: 'principal', component: PrincipalComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'login'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
