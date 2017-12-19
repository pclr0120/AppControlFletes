import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
import { Coleccion } from '../../../BuscadorPipe/Coleccion';
import { MysqlVehiculoService } from '../../../servicios/mysql-vehiculo.service';

@Component({
  selector: 'app-vehiculo-l',
  templateUrl: './vehiculo-l.component.html',
  styleUrls: ['./vehiculo-l.component.css']
})
export class VehiculoLComponent implements OnInit {

  Buscar: Coleccion = new Coleccion();
  Data:any[]=[];

Resultado:boolean;
  constructor( private mysql: MysqlVehiculoService) { 

    this.mysql.getdatas().
    subscribe(Data=>{
      for(const id$ in Data){
      
          
        const p=Data[id$];
        p.id$=id$;
        this.Data.push(Data[id$]);
       
        
    }
  });
 

  }

  eliminar(id$){
  
    
        this.mysql.deldata(id$).subscribe(res=>{
          if(res.success){
            this.Resultado=true;
          }else
          this.Resultado=false;
      
          this.Data=[];
           this.mysql.getdatas().
    subscribe(Data=>{
      for(const id$ in Data){
      
          
        const p=Data[id$];
        p.id$=id$;
        this.Data.push(Data[id$]);
       
        
    }
  });
          
        });

       }

  ngOnInit() {
  }

}
