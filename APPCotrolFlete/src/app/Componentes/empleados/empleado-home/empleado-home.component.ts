import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado-home',
  templateUrl: './empleado-home.component.html',
  styleUrls: ['./empleado-home.component.css']
})
export class EmpleadoHomeComponent implements OnInit {

  titulo:string;
  user:string ;
  hoy:any = new Date();
  constructor() { }

  ngOnInit() {
    this.user="PABLO CESAR LEYVA RAMIREZ";
    this.titulo="BIENVENIDO MODULO DE EMPLEADOS";
  }

}
