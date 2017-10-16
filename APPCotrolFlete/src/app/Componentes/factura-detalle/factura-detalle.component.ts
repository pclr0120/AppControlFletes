import { Component, OnInit } from '@angular/core';
import { Factura } from '../ModeloDatos/factura';
import { Articulo } from '../ModeloDatos/Articulo';
@Component({
  selector: 'app-factura-detalle',
  templateUrl: './factura-detalle.component.html',
  styleUrls: ['./factura-detalle.component.css']
})
export class FacturaDetalleComponent implements OnInit {
  factura=new Factura;    
  a=new Articulo;
  notificacion:string;
  subt:number;
  IVA:number;
  Total:number;
  public temp:any=[];
  constructor() { }
  public agregar() {
    this.factura.AgregarArticulo(this.a.Id,this.a.Nombre,this.a.Descripcion,this.a.Cantidad,this.a.Precio,this.a.IVA);
    this.notificacion='Agregado correctamente';
    this.subt=this.factura.CalcularSubtotal();
    this.IVA=this.factura.IVA;
    this.Total=this.factura.Total;
    
  }

 public Update(){
   this.factura.Update();
   this.subt=this.factura.CalcularSubtotal();
   this.IVA=this.factura.IVA;
   this.Total=this.factura.Total;
 }
  ngOnInit() {
  }

}
