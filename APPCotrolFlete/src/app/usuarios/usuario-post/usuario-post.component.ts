import { Component, OnInit,DoCheck } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
import {MysqlService} from '../../servicios/mysql.service';
@Component({
  selector: 'app-usuario-post',
  templateUrl: './usuario-post.component.html',
  styleUrls: ['./usuario-post.component.css']
})
export class UsuarioPostComponent implements OnInit {

  UsuarioForm:FormGroup;
  Usuario:any;
  presupuestos:any[]=[];
  NEBander:boolean;
  NeFound:boolean;
    constructor(private pf:FormBuilder,private mysql:MysqlService) { 

      this.mysql.getPresupuestos().
      subscribe(presupuestos=>{
        console.log("entre",this.presupuestos);
        for(const id$ in presupuestos){
  
          const p=presupuestos[id$];
          p.id$=id$;
          this.presupuestos.push(presupuestos[id$]);
         
          
      }
    });
    console.log("entre",this.presupuestos);

    }
    ngDoCheck(){
      if(this.UsuarioForm.get('Tipo').value=="EMP"){
        this.NEBander=true;
        

      }else
      this.NEBander=false;
      
      if(this.UsuarioForm.get('NE').value=="123456"){
        this.NeFound=true;
        

      }else
      this.NeFound=false;
      
       
    } 
    ngOnInit() {
  
      this.UsuarioForm=this.pf.group({

        Tipo:['',[Validators.required,Validators.maxLength(50)]],
        NE:['',[Validators.minLength(6)]],
        Usuario:['',[Validators.required,Validators.maxLength(50),Validators.email]],
        Password:['',[Validators.required,Validators.minLength(6)]]
     
  
        
      });
      this.onChanges();
    }
  
    onChanges(){
  
      // this.UsuarioForm.valueChanges.subscribe(valor=>{
      //   this.base=valor.base;
      //   this.tipo=valor.tipo;
      //   this.UsuarioForm.value.iva=this.base * this.tipo;
      //   this.UsuarioForm.value.total=this.base +(this.base *this.tipo);
  
  
  
     // });
    }
    onSubmit(){
      try{
    this.Usuario=this.saveUsuario();
  this.mysql.postPresupuesto(this.Usuario).subscribe(newpres=>{})
  this.UsuarioForm.reset();
  console.log("inserto correctamente");
  
      }catch(e){

        console.log("Error insertar");
      }
    
    }
    saveUsuario(){
  
      const saveUsuario={
        Usuario:this.UsuarioForm.get('Usuario').value,
        NE:this.UsuarioForm.get('NE').value,
        Tipo:this.UsuarioForm.get('Tipo').value,
      
        Password:this.UsuarioForm.get('Password').value
   
      }
      return saveUsuario;
    }

}
