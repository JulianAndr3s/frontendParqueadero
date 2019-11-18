import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tipovehiculo } from '../modelo/tipovehiculo';
import { Endpoints } from '../util/endpoints';

@Injectable({
  providedIn: 'root'
})
export class TipovehiculoService {

  constructor(private http: HttpClient) { }

  listAllTipovehiculos(): Observable<Tipovehiculo[]> {
    return this.http.get<Tipovehiculo[]>(Endpoints.LISTARVEHICULOS);
  }
}
