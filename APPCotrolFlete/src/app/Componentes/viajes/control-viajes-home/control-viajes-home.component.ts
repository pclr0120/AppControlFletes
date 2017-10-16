import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-viajes-home',
  templateUrl: './control-viajes-home.component.html',
  styleUrls: ['./control-viajes-home.component.css']
})
export class ControlViajesHomeComponent implements OnInit {
  titulo:string;
  user:string ;
  hoy:any = new Date();
  constructor() {
    this.user="PABLO CESAR LEYVA RAMIREZ";
    this.titulo="BIENVENIDO A Control de Viajes";
    localStorage.setItem('T','');
   }

  ngOnInit() {
  }

}
