import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/modelo/vehiculo';
import { VehiculoService } from '../../../servicios/vehiculo.service';
import { Router } from '@angular/router';
import { Tipovehiculo } from '../../../modelo/tipovehiculo';
import { TipovehiculoService } from '../../../servicios/tipovehiculo.service';

@Component({
  selector: 'app-ingresar-vehiculo',
  templateUrl: './ingresar-vehiculo.component.html',
  styleUrls: ['./ingresar-vehiculo.component.css']
})
export class IngresarVehiculoComponent implements OnInit {

  public vehiculo: Vehiculo = new Vehiculo();
  public tipoVehiculos: Tipovehiculo[];
  public id: number;
  public tipoVehiculo: Tipovehiculo = new Tipovehiculo();
  constructor(private tipovehiculoService: TipovehiculoService, private vehiculoService: VehiculoService, private router: Router) { }

  ngOnInit() {
    this.tipovehiculoService.listAllTipovehiculos().subscribe(
      (tipoVehiculo) => {
        this.tipoVehiculos = tipoVehiculo;
      }
    );
  }

  insert() {
    this.tipoVehiculo.id = this.id;
    this.vehiculo.tipoVehiculo = this.tipoVehiculo;
    this.vehiculoService.insertar(this.vehiculo).subscribe(
      _ => {
        this.router.navigate(['/listar-vehiculos']);
      }
    );
  }

}
