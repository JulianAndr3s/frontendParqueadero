import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _usuario: Usuario;
  private _token: string;

  public get usuario(): Usuario {
    if (this._usuario != null) {
      return this._usuario;
    } else if (this._usuario == null && sessionStorage.getItem('usuario') != null ) {
      this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
      return this._usuario;
    }
    return new Usuario();
  }

  public get token(): string {
    if (this._token != null ) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;

  }


  constructor(private http: HttpClient) { }

  login(usuario: Usuario): Observable<any> {
    const utlEnPoint = 'http://localhost:8181/oauth/token';

    // btoa convierte a base 64 las credenciales
    const credenciales = btoa('angularapp' + ':' + '12345');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales
    });
    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', usuario.username);
    params.set('password', usuario.password);
    return this.http.post<any>(utlEnPoint, params.toString(), { headers: httpHeaders });
  }

  guardarUsuario(accessToken: string): void {
    let payload = this.obtenerDatosToken(accessToken);
    this._usuario = new Usuario();
    this._usuario.username = payload.user_name;
    this._usuario.roles = payload.authorities;
    sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
  }

  guardarToken(accessToken: string): void {
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }

  obtenerDatosToken(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split('.')[1]));
    }
    return null;
  }

  isAutenticated(): boolean {
    let payload = this.obtenerDatosToken(this.token);
    if (payload != null && payload.user_name && payload.user_name.length > 0) {
       return true;
    }
    return false;
  }


  logout(): void {
    this._token = null;
    this._usuario = null;
    sessionStorage.clear();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
  }

}
