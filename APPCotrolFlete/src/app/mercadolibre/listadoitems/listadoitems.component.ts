import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import { MercadoLibreService } from '../../servicios/mercado-libre.service';
@Component({
  selector: 'app-listadoitems',
  templateUrl: './listadoitems.component.html',
  styleUrls: ['./listadoitems.component.css']
})
export class ListadoitemsComponent implements OnInit {


  Data:any[]=[];
  DolarTomxn:any[]=[];
  ViajeForm:FormGroup;
  Resultado:boolean;
  Pesos:any;
    constructor( private pf:FormBuilder,private mysql: MercadoLibreService) { 
  
   
  
    }
  
    
  
         buscar(){
          this.mysql.getdatas().
          subscribe(Data=>{
            this.DolarTomxn.push(Data);
            console.log("dolar:",this.DolarTomxn[0].ratio);
            this.Pesos=this.DolarTomxn[0].ratio;
        });
          this.Data=[];
          console.log("hola:",this.ViajeForm.get('bus').value,this.ViajeForm.get('ran').value,this.ViajeForm.get('max').value);
      this.mysql.getdata(this.ViajeForm.get('bus').value,this.ViajeForm.get('ran').value,this.ViajeForm.get('max').value).
      subscribe(Data=>{
        for(const id$ in Data){
        
            
          const p=Data[id$];
         // p.id$=id$;
       
         
       
      }
         this.Data.push(Data.results);
      console.log("datos:",this.Data);
      console.log("datos:",this.Data[0][3]);
      console.log("datos:",this.Data[0][1].reviews.rating_average);
      console.log("datos:",this.Data[0][0].reviews.rating_average);
    });

         }
    ngOnInit() {
      this.ViajeForm=this.pf.group({
        bus:['',[Validators.required,Validators.maxLength(50)]],
        
                    ran:['',[Validators.required,Validators.maxLength(50)]],
                    max:['',[Validators.required,Validators.maxLength(50)]],
      

     
        
      
  
        
      });
      
    }
    onSubmit(){
      
      
    }
  
  }
  
