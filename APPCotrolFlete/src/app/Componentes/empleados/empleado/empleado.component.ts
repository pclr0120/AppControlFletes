import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  EmpleadoForm:FormGroup;
  Empleado:any;
  
    constructor(private pf:FormBuilder) { }
  
    ngOnInit() {
  
      this.EmpleadoForm=this.pf.group({
        Nombre:['',[Validators.required,Validators.maxLength(50)]],
        Email:['',[Validators.required,Validators.maxLength(50)]],
        Curp:['',[Validators.required,Validators.maxLength(18)]],
        Direccion:['',[Validators.required,Validators.maxLength(30)]],
        Ciudad:['',[Validators.required,Validators.maxLength(5)]],
        FechaNacimiento:['',[Validators.required,Validators.maxLength(5)]],
        Foto:['',[Validators.required,Validators.maxLength(300)]],
        Estatus:['',[Validators.required,Validators.maxLength(5)]],
        Licencia:['',Validators.required],
        Telefono:['',Validators.required]
        // base:['',Validators.required],
        // tipo:['',Validators.required],
        // iva:this.iva,
        // total:this.total
  
        
      });
      this.onChanges();
    }
  
    onChanges(){
  
      // this.EmpleadoForm.valueChanges.subscribe(valor=>{
      //   this.base=valor.base;
      //   this.tipo=valor.tipo;
      //   this.EmpleadoForm.value.iva=this.base * this.tipo;
      //   this.EmpleadoForm.value.total=this.base +(this.base *this.tipo);
  
  
  
     // });
    }
    onSubmit(){
    this.Empleado=this.saveEmpleado();
  
    
    
    }
    saveEmpleado(){
  
      const saveEmpleado={
        Nombre:this.EmpleadoForm.get('Nombre').value,
        Email:this.EmpleadoForm.get('Email').value,
        Curp:this.EmpleadoForm.get('Curp').value,
        Direccion:this.EmpleadoForm.get('Direccion').value,
        Ciudad:this.EmpleadoForm.get('Ciudad').value,
        FechaNacimiento:this.EmpleadoForm.get('FechaNacimiento').value,
        Foto:this.EmpleadoForm.get('Foto').value,
        Estatus:this.EmpleadoForm.get('Estatus').value,
        Licencia:this.EmpleadoForm.get('Licencia').value,
        Telefono:this.EmpleadoForm.get('Telefono').value

        // cp:this.EmpleadoForm.get('cp').value,
        // tipo:this.EmpleadoForm.get('tipo').value,
        // iva:this.EmpleadoForm.get('iva').value,
        // base:this.EmpleadoForm.get('base').value,
        // total:this.EmpleadoForm.get('total').value
      }
      return saveEmpleado;
    }

}
