import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelo/usuario';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  usuarioAutenticado: Usuario;
  constructor(private loginService: LoginService, private router: Router) { 
    this.usuarioAutenticado = new Usuario();
  }

  ngOnInit() {
  }

  isAutenticated(): boolean {
    if (this.loginService.isAutenticated()) {
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.loginService.logout();
    alert('Has cerrado la sesión exitosamente');
    this.router.navigate(['/login']);
  }

}
