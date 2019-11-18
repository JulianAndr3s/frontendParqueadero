import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../modelo/usuario';
import { LoginService } from '../../../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(private loginService: LoginService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  login(): void {
    if (this.usuario.username == null || this.usuario.password == null) {
      alert('Usuario o password no pueden ser vacío');
    } else {
        this.loginService.login(this.usuario).subscribe(respose => {
        this.loginService.guardarUsuario(respose.access_token);
        this.loginService.guardarToken(respose.access_token);
        let usuario = this.loginService.usuario;
        this.router.navigate(['/principal']);
        alert(' Bienvenido ' + usuario.username + ', has iniciado sesión con éxito');
      }, _ =>{

           alert('usuario o clave incorrectas');

      });
    }
  }

}
