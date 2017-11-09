import { Component, OnInit,ViewChild } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
import { MysqlService } from '../../../servicios/mysql.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  EmpleadoForm:FormGroup;
  Empleado:any;
  Resultado:boolean;
  Mostar:boolean;
  fileBrowser:any;
  url:any;
  a:any;
  
  
    constructor(private pf: FormBuilder, private activatedRouter:ActivatedRoute, private router:Router,private mysql: MysqlService) { }
  
    readUrl(event:any) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
    
        reader.onload = (event:any) => {
          this.url = event.target.result;
        }
    
        reader.readAsDataURL(event.target.files[0]);
        console.log('dentro',event.target.files[0]);
        this.a=event.target.files[0]['name'];
        console.log("dsad00",this.a);
        
        this.upload(event.target.result);
        
      }
    }
    upload(hola:any) {
      this.fileBrowser = hola;
      if (this.fileBrowser.files && this.fileBrowser.files[0]) {
        const formData = new FormData();
        formData.append("image", this.fileBrowser.files[0]);
      //  this.projectService.upload(formData, this.project.id).subscribe(res => {
          // do stuff w/my uploaded file
        
        //});
      }
    }
   
    ngOnInit() {
  
      this.EmpleadoForm=this.pf.group({
        Nombre:['',[Validators.required,Validators.maxLength(100),Validators.minLength(10)]],
        Email:['',[Validators.required,Validators.maxLength(50),Validators.email]],
        Curp:['',[Validators.required,Validators.maxLength(18),Validators.minLength(18)]],
        Direccion:['',[Validators.required,Validators.maxLength(50)]],
       RFC:['',[Validators.required,Validators.maxLength(13),Validators.minLength(13)]],
       
        FechaNacimiento:['',[Validators.required]],

        Puesto:['',[Validators.required,Validators.maxLength(30)]],
       Licencia:['',[Validators.required,Validators.maxLength(15)]],
       Telefono:['',[Validators.required,Validators.minLength(10)]],
       Foto:[''],
        // iva:this.iva,
        // total:this.total
  
        
      });
      this.onChanges();
    }
  
    onChanges(){
  
   
    }
    onSubmit(){
    this.Empleado=this.saveEmpleado();
    this.Resultado=false;
       this.mysql.postUsuario(this.Empleado).subscribe(newpres => { 
      this.Mostar=true;
      this.Resultado=false;
      if(newpres.success==true)
       {
         this.EmpleadoForm.reset();
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
        FechaNacimiento:this.EmpleadoForm.get('FechaNacimiento').value,
       
        
        //Estatus:this.EmpleadoForm.get('Estatus').value,
        Licencia:this.EmpleadoForm.get('Licencia').value,
        Telefono:this.EmpleadoForm.get('Telefono').value,

        Puesto:this.EmpleadoForm.get('Puesto').value,
        RFC:this.EmpleadoForm.get('RFC').value,
         Foto:this.a
        // iva:this.EmpleadoForm.get('iva').value,
        // base:this.EmpleadoForm.get('base').value,
        // total:this.EmpleadoForm.get('total').value
      }
      return saveEmpleado;
    }

}
