import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vehiculo } from 'src/app/modelo/vehiculo';
import { Endpoints } from '../util/endpoints';
import { Headers } from '../util/headers';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  listAll(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(Endpoints.LISTAR);
  }
  buscar(placa: string): Observable<Vehiculo> {
    let token = this.loginService.token;
    let httpHeaders = new HttpHeaders();
    if (token != null){
       httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    httpHeaders.get('Authorization');
    // tslint:disable-next-line: max-line-length
    return this.http.get<Vehiculo>(Endpoints.BUSCAR.concat(placa).concat('/buscarplaca'), {headers : httpHeaders});
  }
  insertar(vehiculo: Vehiculo): Observable<Vehiculo> {
    let token = this.loginService.token;
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    if (token != null){
      httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    httpHeaders.get('Authorization');
    httpHeaders.get('Content-Type');
    return this.http.post<Vehiculo>(Endpoints.INSERTAR, vehiculo , {headers : httpHeaders});
  }
  eliminar(id: number) {
    let token = this.loginService.token;
    let httpHeaders = new HttpHeaders();
    if (token != null){
       httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    httpHeaders.get('Authorization');
    return this.http.delete<Vehiculo>(Endpoints.ELIMINAR.concat(id.toString()).concat('/eliminar'), {headers : httpHeaders} );
  }
  actualizar(vehiculo: Vehiculo, id: number) {
    let token = this.loginService.token;
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    if (token != null){
      httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    httpHeaders.get('Authorization');
    httpHeaders.get('Content-Type');
    return this.http.put<Vehiculo>(Endpoints.ACTUALIZAR.concat(id.toString()).concat('/actualizar'), vehiculo, {headers : httpHeaders} );
  }
}
