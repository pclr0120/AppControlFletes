import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factura-home',
  templateUrl: './factura-home.component.html',
  styleUrls: ['./factura-home.component.css']
})
export class FacturaHomeComponent implements OnInit {
  hoy:any = new Date();
  constructor() { 

    localStorage.setItem('T','FACTURACION');
    localStorage.setItem('R','Registrar');
    localStorage.setItem('C','Consultar');
    localStorage.setItem('M','Modificar');
  }

  ngOnInit() {
  }

}
