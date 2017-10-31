import { Component, OnInit } from '@angular/core';
import { MysqlService } from '../../../servicios/mysql.service';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';

@Component({
  selector: 'app-empleado-lista',
  templateUrl: './empleado-lista.component.html',
  styleUrls: ['./empleado-lista.component.css']
})
export class EmpleadoListaComponent implements OnInit {
  empleados:any[]=[];
  constructor( private mysql: MysqlService) { 

    this.mysql.getUsuarios().
    subscribe(empleados=>{
      for(const id$ in empleados){

        const p=empleados[id$];
        p.id$=id$;
        this.empleados.push(empleados[id$]);
    }
  })


  }

  ngOnInit() {
  }

}
