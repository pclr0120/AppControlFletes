import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Coleccion } from '../../../BuscadorPipe/Coleccion';
import { ViajeService } from '../../../servicios/viaje.service';

@Component({
  selector: 'app-viaje-listas',
  templateUrl: './viaje-listas.component.html',
  styleUrls: ['./viaje-listas.component.css']
})
export class ViajeListasComponent implements OnInit {

  Buscar: Coleccion = new Coleccion();
  Data:any[]=[];
  DataP:any[]=[];
  DataPm:any[]=[];
  DataNp:any[]=[];
id:any;
Resultado:boolean;
FiltroPago(element) { 
  return (element.Pago=='SALDADO'); 
} 
FiltroPagoMinimo(element) { 
  return (element.Pago=='PAGOMinimo'); 
} 
FiltroSinpagar(element) { 
  return (element.Pago=='SinSaldar'); 
} 
  constructor( private mysql: ViajeService,private modalService: NgbModal) { 

    this.mysql.getdatas().
    subscribe(Data=>{
      for(const id$ in Data){
      
          
        const p=Data[id$];
        p.id$=id$;
        this.Data.push(Data[id$]);
    
       
        
    }
    this.DataP.push(this.Data.filter(this.FiltroPago));
    this.DataPm.push(this.Data.filter(this.FiltroPagoMinimo));
    this.DataNp.push(this.Data.filter(this.FiltroSinpagar));

    
  });
 

  }
del(){
  this.eliminar(this.id);
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
          this.DataP.push(this.Data.filter(this.FiltroPago));
          this.DataPm.push(this.Data.filter(this.FiltroPagoMinimo));
          this.DataNp.push(this.Data.filter(this.FiltroSinpagar));
      
          
        });
          
        });

       }
       openC(contentM,id) {
     this.id=id;
        this.modalService.open(contentM, { windowClass: 'dark-modal' });
    
      }
  
  ngOnInit() {
  }

}

