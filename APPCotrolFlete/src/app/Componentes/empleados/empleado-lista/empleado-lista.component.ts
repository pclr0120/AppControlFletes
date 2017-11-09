import { Component, OnInit } from '@angular/core';
import { MysqlService } from '../../../servicios/mysql.service';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
import { Coleccion } from '../../../BuscadorPipe/Coleccion';
@Component({
  selector: 'app-empleado-lista',
  templateUrl: './empleado-lista.component.html',
  styleUrls: ['./empleado-lista.component.css']
})
export class EmpleadoListaComponent implements OnInit {
  Buscar: Coleccion = new Coleccion();
  empleados:any[]=[];

Resultado:boolean;
  constructor( private mysql: MysqlService) { 

    this.mysql.getUsuarios().
    subscribe(empleados=>{
      for(const id$ in empleados){
      
          
        const p=empleados[id$];
        p.id$=id$;
        this.empleados.push(empleados[id$]);
       
        
    }
  });
 

  }

  eliminarEmpleado(id$){
    
        this.mysql.delUsuario(id$).subscribe(res=>{
          if(res.success){
            this.Resultado=true;
          }else
          this.Resultado=false;
          console.log(res);
          this.empleados=[];
           this.mysql.getUsuarios().
    subscribe(empleados=>{
      for(const id$ in empleados){
      
          
        const p=empleados[id$];
        p.id$=id$;
        this.empleados.push(empleados[id$]);
       
        
    }
  });
          
        });

       }

  ngOnInit() {
  }

}
