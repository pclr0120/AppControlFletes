import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
import { RemolqueService } from '../../../servicios/remolque.service';
@Component({
  selector: 'app-control-viajes',
  templateUrl: './control-viajes.component.html',
  styleUrls: ['./control-viajes.component.css']
})
export class ControlViajesComponent implements OnInit {

  Data:any[]=[];
  constructor( private pf:FormBuilder,private mysql: RemolqueService) { 

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

    ViajeForm:FormGroup;
    viaje:any;
    ngOnInit() {
      
          this.ViajeForm=this.pf.group({
            Cliente:['',[Validators.required,Validators.maxLength(50)]],
            Asignacion:['',[Validators.required,Validators.maxLength(50)]],
            AsignacionCaja:['',[Validators.required,Validators.maxLength(50)]],
            AsignacionCamion:['',[Validators.required,Validators.maxLength(50)]],
            Mercancia:['',[Validators.required,Validators.maxLength(13)]],
            Origen:['',[Validators.required,Validators.maxLength(5)]],
            Destino:['',[Validators.required,Validators.maxLength(5)]],
            Costo:['',[Validators.required,Validators.maxLength(10)]],
            EstadoViaje:['',[Validators.required]],
            Tipo:['',[Validators.required,Validators.maxLength(30)]]
         
         
            
          
      
            
          });
          
        }
        onSubmit(){
          
          
          
          }

}
