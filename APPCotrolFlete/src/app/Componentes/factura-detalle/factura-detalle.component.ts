import { Component, OnInit } from '@angular/core';
import { Factura } from '../ModeloDatos/factura';
import { Articulo } from '../ModeloDatos/Articulo';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';

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

  facturaForm:FormGroup;
  facturaD:any;

  public temp:any=[];
  constructor(private pf:FormBuilder) { }
  public agregar() {
    this.factura.AgregarArticulo(this.a.Id,this.a.Nombre,this.a.Descripcion,this.a.Cantidad,this.a.Precio,this.a.IVA);
    this.notificacion='Agregado correctamente';
    this.subt=this.factura.CalcularSubtotal();
    this.IVA=this.factura.IVA;
    this.Total=this.factura.Total;
    this.facturaForm.reset();
    
  }

 public Update(){
   this.factura.Update();
   this.subt=this.factura.CalcularSubtotal();
   this.IVA=this.factura.IVA;
   this.Total=this.factura.Total;
 }
  ngOnInit() {

    this.facturaForm=this.pf.group({
      id:['',[Validators.required,Validators.maxLength(10)]],
      articulo:['',[Validators.required,Validators.maxLength(50)]],
      descripcion:['',[Validators.required,Validators.maxLength(50)]],
      cantidad:['',[Validators.required,Validators.maxLength(10)]],
      precio:['',[Validators.required,Validators.maxLength(10)]],
      iva:['',[Validators.required,Validators.maxLength(10)]],
    
      // base:['',Validators.required],
      // tipo:['',Validators.required],
      // iva:this.iva,
      // total:this.total

      
    });
    
  }
  onSubmit(){
    this.facturaD=this.saveFacturaDetalle();
    console.log("hola");
    this.facturaForm.reset();
    
    
    }
    saveFacturaDetalle(){
      
          const saveFacturaDetalle={
            id:this.facturaForm.get('id').value,
            articulol:this.facturaForm.get('articulo').value,
            descripcion:this.facturaForm.get('descripcion').value,
            cantidad:this.facturaForm.get('cantidad').value,
            precio:this.facturaForm.get('precio').value,
            iva:this.facturaForm.get('iva').value
            // cp:this.facturaForm.get('cp').value,
            // tipo:this.facturaForm.get('tipo').value,
            // iva:this.facturaForm.get('iva').value,
            // base:this.facturaForm.get('base').value,
            // total:this.facturaForm.get('total').value
          }
          return saveFacturaDetalle;
        }
}
