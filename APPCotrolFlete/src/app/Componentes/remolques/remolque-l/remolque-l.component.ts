


import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
import { Coleccion } from '../../../BuscadorPipe/Coleccion';
import { RemolqueService } from '../../../servicios/remolque.service';
import { log } from 'util';

@Component({
  selector: 'app-remolque-l',
  templateUrl: './remolque-l.component.html',
  styleUrls: ['./remolque-l.component.css']
})
export class  RemolqueLComponent implements OnInit {

  Buscar: Coleccion = new Coleccion();
  Data:any[]=[];

Resultado:boolean;
  constructor( private mysql: RemolqueService) { 

    this.mysql.getdatas().
    subscribe(Data=>{
      for(const id$ in Data){
      
          
        const p=Data[id$];
        p.id$=id$;
        this.Data.push(Data[id$]);
       
        console.log("datos:",this.Data);
    }
  });
 

  }

  eliminar(id$){
    console.log("id:",id$);
    
        this.mysql.deldata(id$).subscribe(res=>{
          if(res.success){
            this.Resultado=true;
          }else
          this.Resultado=false;
          console.log(res);
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
