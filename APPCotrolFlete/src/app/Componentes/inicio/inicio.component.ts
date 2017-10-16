import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
titulo:string;
user:string ;
hoy:any = new Date();
  constructor() { 
    this.user="PABLO CESAR LEYVA RAMIREZ";
    this.titulo="BIENVENIDO";
    localStorage.setItem('T','');
  }

  ngOnInit() {
   
  }

}
