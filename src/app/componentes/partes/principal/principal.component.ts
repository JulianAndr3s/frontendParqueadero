import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../servicios/login.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelo/usuario';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  
  constructor(private router: Router) {
  }

  ngOnInit() {
  }



}
