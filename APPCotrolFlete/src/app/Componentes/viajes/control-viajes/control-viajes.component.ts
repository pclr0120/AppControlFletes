import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
import { RemolqueService } from '../../../servicios/remolque.service';
import { MysqlVehiculoService } from '../../../servicios/mysql-vehiculo.service';
import { ClienteService } from '../../../servicios/cliente.service';
@Component({
  selector: 'app-control-viajes',
  templateUrl: './control-viajes.component.html',
  styleUrls: ['./control-viajes.component.css']
})
export class ControlViajesComponent implements OnInit {

  Data:any[]=[];
  DataV:any[]=[];
  DataC:any[]=[];
 
  constructor( private pf:FormBuilder,private mysql: RemolqueService,private mysqlV: MysqlVehiculoService,private mysqlC: ClienteService) { 

    this.mysql.getdatas().
    subscribe(Data=>{
      for(const id$ in Data){
      
          
        const p=Data[id$];
        p.id$=id$;
        this.Data.push(Data[id$]);
       
    
    }
  });

  this.mysqlV.getdatas().
  subscribe(DataV=>{
    for(const id$ in DataV){
    
        
      const p=DataV[id$];
      p.id$=id$;
      this.DataV.push(DataV[id$]);
      console.log("datos:",this.DataV);
     
      
  }
});
// this.mysqlC.getUsuarios().
// subscribe(DataC=>{
//   for(const id$ in DataC){
  
      
//     const p=DataC[id$];
//     p.id$=id$;
//     this.DataC.push(DataC[id$]);
//     console.log("datos:",this.DataC);
   
    
// }
// });
 

  }

    ViajeForm:FormGroup;
    viaje:any;
    ngOnInit() {
      
          this.ViajeForm=this.pf.group({
            Cliente:['',[Validators.required,Validators.maxLength(50)]],

            AsignacionCaja:['',[Validators.required,Validators.maxLength(50)]],
            AsignacionCamion:['',[Validators.required,Validators.maxLength(50)]],
            Mercancia:['',[Validators.required,Validators.maxLength(100)]],
            Origen:['',[Validators.required,Validators.maxLength(5)]],
            Destino:['',[Validators.required,Validators.maxLength(5)]],
            Costo:['',[Validators.required,Validators.maxLength(10)]],
            EstadoViaje:['',[Validators.required]],
            Tipo:['',[Validators.required,Validators.maxLength(50)]]
         
         
            
          
      
            
          });
          
        }
        onSubmit(){
          
          
          
          }


          saveremolque(){
            
                const saveremolque={
                  Cliente:this.ViajeForm.get('Cliente').value,
                  AsignacionCaja:this.ViajeForm.get('AsignacionCaja').value,
                  AsignacionCamion:this.ViajeForm.get('AsignacionCamion').value,
                  Mercancia:this.ViajeForm.get('Mercancia').value,
                  Origen:this.ViajeForm.get('Origen').value,
                  Destino:this.ViajeForm.get('Destino').value,
                  Costo:this.ViajeForm.get('Costo').value,
                  EstadoViaje:this.ViajeForm.get('EstadoViaje').value,
                  
                  Tipo:this.ViajeForm.get('Tipo').value,
               
               
               
                  
                  
                  // cp:this.facturaForm.get('cp').value,
                  // tipo:this.facturaForm.get('tipo').value,
                  // iva:this.facturaForm.get('iva').value,
                  // base:this.facturaForm.get('base').value,
                  // total:this.facturaForm.get('total').value
                }
                return saveremolque;
              }
      

}
