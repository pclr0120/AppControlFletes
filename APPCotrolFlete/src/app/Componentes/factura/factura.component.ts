import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
facturaForm:FormGroup;
factura:any;
base:any;
tipo:any;
iva:any=0;
total:any=0;
guardado:boolean;
  constructor(private pf:FormBuilder) { }

  ngOnInit() {

    this.facturaForm=this.pf.group({
      nombre:['',[Validators.required,Validators.maxLength(50)]],
      email:['',[Validators.required,Validators.maxLength(50)]],
      rfc:['',[Validators.required,Validators.maxLength(13)]],
      direccion:['',[Validators.required,Validators.maxLength(30)]],
      cp:['',[Validators.required,Validators.maxLength(5)]],
     // proveedor:['',Validators.required],
      fecha:['',Validators.required,],
      concepto:['',[Validators.required,Validators.maxLength(30)]]
      // base:['',Validators.required],
      // tipo:['',Validators.required],
      // iva:this.iva,
      // total:this.total

      
    });
    this.onChanges();
  }

  onChanges(){

    // this.facturaForm.valueChanges.subscribe(valor=>{
    //   this.base=valor.base;
    //   this.tipo=valor.tipo;
    //   this.facturaForm.value.iva=this.base * this.tipo;
    //   this.facturaForm.value.total=this.base +(this.base *this.tipo);


    
   // });
  }
  onSubmit(){
  this.factura=this.saveFactura();
  console.log("hola");

  this.guardado=true;
  this.facturaForm.reset();


  
  }
  saveFactura(){

    const saveFactura={
      nombre:this.facturaForm.get('nombre').value,
      email:this.facturaForm.get('email').value,
      rfc:this.facturaForm.get('rfc').value,
      direccion:this.facturaForm.get('direccion').value
      // cp:this.facturaForm.get('cp').value,
      // tipo:this.facturaForm.get('tipo').value,
      // iva:this.facturaForm.get('iva').value,
      // base:this.facturaForm.get('base').value,
      // total:this.facturaForm.get('total').value
    }
    return saveFactura;
  }
  MostrarCabecera(){

    this.guardado=false;
    console.log("dasdas");
    
  }

}
