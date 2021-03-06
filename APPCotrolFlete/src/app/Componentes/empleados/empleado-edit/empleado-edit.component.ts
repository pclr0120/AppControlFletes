import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';

import {Router,ActivatedRoute}from '@angular/router';
import { MysqlService } from '../../../servicios/mysql.service';
@Component({
  selector: 'app-empleado-edit',
  templateUrl: './empleado-edit.component.html',
  styleUrls: ['./empleado-edit.component.css']
})
export class EmpleadoEditComponent implements OnInit {
  id:string;
  empleado:any;
  EmpleadoForm:FormGroup;
  Empleado:any[]=[];

  Resultado:boolean;
  Mostar:boolean;
  constructor(private pf: FormBuilder, private mysql: MysqlService, private router:Router,
    private activatedRouter:ActivatedRoute) {
      
      this.activatedRouter.params
      .subscribe(parametros=>{
        this.id=parametros['id'];
        console.log("dentroID",this.id);
        this.mysql.getUsuario(this.id)
        .subscribe(Empleado=>{
          console.log("dentro",Empleado[0]);
          this.Empleado=Empleado[0];
          console.log("dentro",this.empleado);
          
          
        })
      });
  
      
   
   }
  

   ngOnInit() {
    
        this.EmpleadoForm=this.pf.group({
          Nombre:['',[Validators.required,Validators.maxLength(100),Validators.minLength(10)]],
          Email:['',[Validators.required,Validators.maxLength(50),Validators.email]],
          Curp:['',[Validators.required,Validators.maxLength(18),Validators.minLength(18)]],
          Direccion:['',[Validators.required,Validators.maxLength(50)]],
         RFC:['',[Validators.required,Validators.maxLength(13),Validators.minLength(13)]],
         
          FechaNacimiento:['',[Validators.required]],
          //Foto:['',[Validators.required,Validators.maxLength(300)]],
          Puesto:['',[Validators.required,Validators.maxLength(30)]],
         Licencia:['',[Validators.required,Validators.maxLength(15)]],
         Telefono:['',[Validators.required,Validators.minLength(10)]],
         // base:['',Validators.required],
          // tipo:['',Validators.required],
          // iva:this.iva,
          // total:this.total
    
          
        });
        this.onChanges();
      }
    
      onChanges(){
    
     
      }
      onSubmit(){
    
      this.empleado=this.saveEmpleado();
      this.mysql.putUsuario(this.empleado,this.id).subscribe(newpres=>{
    
        if(newpres.data.msg=='success')
        {
          this.EmpleadoForm.reset();
          console.log("inserto correctamente");
          this.Resultado=true;
          this.router.navigate(['/EmpleadosL']);

        }else
        this.Resultado=false;
      
      });

     
    
        
      
      }
      saveEmpleado(){
    
        const saveEmpleado={
          Nombre:this.EmpleadoForm.get('Nombre').value,
          Email:this.EmpleadoForm.get('Email').value,
          Curp:this.EmpleadoForm.get('Curp').value,
          Direccion:this.EmpleadoForm.get('Direccion').value,
         // Ciudad:this.EmpleadoForm.get('Ciudad').value,
          FechaNacimiento:(this.EmpleadoForm.get('FechaNacimiento').value),
          //Foto:this.EmpleadoForm.get('Foto').value,
          
          //Estatus:this.EmpleadoForm.get('Estatus').value,
          Licencia:this.EmpleadoForm.get('Licencia').value,
          Telefono:this.EmpleadoForm.get('Telefono').value,
  
          Puesto:this.EmpleadoForm.get('Puesto').value,
          RFC:this.EmpleadoForm.get('RFC').value
          // tipo:this.EmpleadoForm.get('tipo').value,
          // iva:this.EmpleadoForm.get('iva').value,
          // base:this.EmpleadoForm.get('base').value,
          // total:this.EmpleadoForm.get('total').value
        }
        return saveEmpleado;
      }

}
