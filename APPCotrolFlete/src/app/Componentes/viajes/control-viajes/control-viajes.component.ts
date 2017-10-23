import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';

@Component({
  selector: 'app-control-viajes',
  templateUrl: './control-viajes.component.html',
  styleUrls: ['./control-viajes.component.css']
})
export class ControlViajesComponent implements OnInit {


  constructor(private pf:FormBuilder) { }
  
    ViajeForm:FormGroup;
    viaje:any;
    ngOnInit() {
      
          this.ViajeForm=this.pf.group({
            Cliente:['',[Validators.required,Validators.maxLength(50)]],
            Asignacion:['',[Validators.required,Validators.maxLength(50)]],
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
