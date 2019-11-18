import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { Vehiculo } from 'src/app/modelo/vehiculo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';
import { TipovehiculoService } from '../../../servicios/tipovehiculo.service';
import { Tipovehiculo } from '../../../modelo/tipovehiculo';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css']
})
export class ListarVehiculosComponent implements OnInit {

  public vehiculo: Vehiculo = new Vehiculo();
  public vehiculoSeleccionado: Vehiculo;
  public vehiculoActualizar: Vehiculo = new Vehiculo();
  public tipovehiculo: Tipovehiculo = new Tipovehiculo();
  public vehiculos: Vehiculo[];
  public tipovehiculos: Tipovehiculo[];
  public id: number;
  constructor(private tipovehiculoService: TipovehiculoService, private vehiculoService: VehiculoService, private router: Router) { }

  ngOnInit() {
    this.listAllComponents();
  }

  listAllComponents() {
    this.tipovehiculoService.listAllTipovehiculos().subscribe(
      (documento) => {
        this.tipovehiculos = documento;
      }
    );
    this.vehiculoService.listAll().subscribe(
      (vehiculo) => {
        this.vehiculos = vehiculo;
      }
    );
  }

  showModal(vehiculo: Vehiculo) {
    this.vehiculoSeleccionado = vehiculo;
  }

  eliminar(id: number) {
    this.vehiculoService.eliminar(id).subscribe(
      _ => (
        this.vehiculos = this.vehiculos.filter(persona => persona !== this.vehiculoSeleccionado)
      )
    );
  }

  actualizar(idActualizar: number) {
    this.tipovehiculo.id = this.id;
    this.vehiculoActualizar.tipoVehiculo = this.tipovehiculo;
    this.vehiculoService.actualizar(this.vehiculoActualizar, idActualizar).subscribe(
      _ => {
        this.listAllComponents();
      }
    );
  }
}
