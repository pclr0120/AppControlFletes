import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';

@Component({
  selector: 'app-viaje-consultar',
  templateUrl: './viaje-consultar.component.html',
  styleUrls: ['./viaje-consultar.component.css']
})
export class ViajeConsultarComponent implements OnInit {

  constructor(private pf:FormBuilder) { }
  
    ViajeForm:FormGroup;
    viaje:any;
    ngOnInit() {
      
          this.ViajeForm=this.pf.group({
            FolioViaje:['',[Validators.required,Validators.maxLength(50)]]
           
         
         
            
          
      
            
          });
          
        }
        onSubmit(){
          
          
          
          }

}
