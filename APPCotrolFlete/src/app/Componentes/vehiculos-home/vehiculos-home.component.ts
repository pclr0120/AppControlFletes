import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculos-home',
  templateUrl: './vehiculos-home.component.html',
  styleUrls: ['./vehiculos-home.component.css']
})
export class VehiculosHOMEComponent implements OnInit {
  hoy:any = new Date();
  constructor() { }

  ngOnInit() {
  }

}
