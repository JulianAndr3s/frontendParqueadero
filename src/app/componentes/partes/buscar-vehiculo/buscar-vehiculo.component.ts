import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/modelo/vehiculo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';
import { Router } from '@angular/router';
import { TipovehiculoService } from 'src/app/servicios/tipovehiculo.service';
import { Tipovehiculo } from '../../../modelo/tipovehiculo';

@Component({
  selector: 'app-buscar-vehiculo',
  templateUrl: './buscar-vehiculo.component.html',
  styleUrls: ['./buscar-vehiculo.component.css']
})
export class BuscarVehiculoComponent implements OnInit {

  public vehiculo: Vehiculo;
  public placa: string;
  public tipovehiculos: Tipovehiculo[];

  constructor(private vehiculoService: VehiculoService, private tipovehiculoService: TipovehiculoService, private router: Router) { }


  ngOnInit() {
    this.tipovehiculoService.listAllTipovehiculos().subscribe(
      (tipovehiculo) => {
        this.tipovehiculos = tipovehiculo;
      }
    );
  }

  buscar() {
    this.vehiculoService.buscar(this.placa).subscribe(
      (vehiculoBuscado) => {
        if (vehiculoBuscado == null) {
          alert('No existe este vehículo con esta placa, busca de nuevo.');
        }
        this.vehiculo = vehiculoBuscado;
      }
    );
  }

}
