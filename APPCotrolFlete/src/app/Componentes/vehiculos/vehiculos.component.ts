import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  constructor(private pf:FormBuilder) { }
  VehiculosForm:FormGroup;
  Vehiculos:any;
  ngOnInit() {

    this.VehiculosForm=this.pf.group({
      Placa:['',[Validators.required,Validators.maxLength(50)]],
      Modelo:['',[Validators.required,Validators.maxLength(50)]],
      Tipo:['',[Validators.required,Validators.maxLength(13)]],
      Seguro:['',[Validators.required,Validators.maxLength(30)]],
      Capacidad:['',[Validators.required,Validators.maxLength(10)]],
     // proveedor:['',Validators.required],
      NumeroChasis:['',Validators.required],
      Combustible:['',Validators.required],
      KmRecorrido:['',Validators.required],
      Estatus:['',Validators.required]
      
      // base:['',Validators.required],
      // tipo:['',Validators.required],
      // iva:this.iva,
      // total:this.total

      
    });
  }
  onSubmit(){
    this.Vehiculos=this.saveVehiculo();
    console.log("hola");
    
    
    }

    saveVehiculo(){
      
          const saveVehiculo={
            Placa:this.VehiculosForm.get('Placa').value,
            Modelo:this.VehiculosForm.get('Modelo').value,
            Tipo:this.VehiculosForm.get('Tipo').value,
            Seguro:this.VehiculosForm.get('Seguro').value,
            Capacidad:this.VehiculosForm.get('Capacidad').value,
            NumeroChasis:this.VehiculosForm.get('NumeroChasis').value,
            Combustible:this.VehiculosForm.get('Combustible').value,
            KmRecorrido:this.VehiculosForm.get('KmRecorridos').value,
            Estatus:this.VehiculosForm.get('Estatus').value

            // cp:this.facturaForm.get('cp').value,
            // tipo:this.facturaForm.get('tipo').value,
            // iva:this.facturaForm.get('iva').value,
            // base:this.facturaForm.get('base').value,
            // total:this.facturaForm.get('total').value
          }
          return saveVehiculo;
        }

}
