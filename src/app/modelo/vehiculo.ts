import { Tipovehiculo } from './tipovehiculo';

export class Vehiculo {
    id: number;
    propietario: string;
    placa: string;
    telefono: string;
    estado: string;
    tipoVehiculo = new Tipovehiculo();
}
