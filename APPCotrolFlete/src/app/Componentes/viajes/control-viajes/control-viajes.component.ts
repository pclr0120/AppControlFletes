import {Component, ViewEncapsulation, OnInit,Input,DoCheck} from '@angular/core';
import { GoogleMapsService } from '../../../servicios/google-maps.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
declare const google: any;
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
import { RemolqueService } from '../../../servicios/remolque.service';
import { MysqlVehiculoService } from '../../../servicios/mysql-vehiculo.service';
import { ClienteService } from '../../../servicios/cliente.service';
import { log } from 'util';
import { MysqlService } from '../../../servicios/mysql.service';
import { ViajeService } from '../../../servicios/viaje.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-control-viajes',
  templateUrl: './control-viajes.component.html',
  styleUrls: ['./control-viajes.component.css']
})
export class ControlViajesComponent implements OnInit {
  resul:boolean=false;
  Data:any[]=[];
  DataV:any[]=[];
  DataC:any[]=[];
  DataM:any[]=[];
  DataO:any[]=[];
  valor:string="guasave";
  b:boolean=false;
  closeResult: string;
  Origen0:string;
  Destino0:string;
  tiempo:string;
  distancia:string;
  distanciaValor:number;
  costo:any;
  PrecioEstablecido:number;
  BpMinimo:boolean=false;
  nombreCliente:string;
  constructor( private pf:FormBuilder,private pf0:FormBuilder,private mysql: RemolqueService,
    private mysqlV: MysqlVehiculoService,private mysqlC: ClienteService,private modalService: NgbModal
  ,private mapsSer:GoogleMapsService,private activatedRouter:ActivatedRoute, private router:Router, private mysqlO:MysqlService,private myslqViaje:ViajeService) { 

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
this.mysqlO.getOperador().
subscribe(DataO=>{
  for(const id$ in DataO){
  
      
    const p=DataO[id$];
    p.id$=id$;
    this.DataO.push(DataO[id$]);
    console.log("datosOperador:",this.DataO);
   
    
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


  openC(contentM) {
    this.viaje = this.saveViaje();
    this.modalService.open(contentM, { windowClass: 'dark-modal' });

  }

  open(content) {
    this.DataM=[];
    this.Origen0=this.frm.get('Destino').value;
    this.Destino0=this.frm.get('Origen').value;
    this.mapsSer.getdata(this.Origen0,this.Destino0).
    subscribe(DataM=>{
    
    this.DataM.push(DataM);
    this.distancia=this.DataM[0].rows[0].elements[0].distance.text;
    this.tiempo=this.DataM[0].rows[0].elements[0].duration.text;
    this.distanciaValor=this.DataM[0].rows[0].elements[0].distance.value;
    this.costo=((this.distanciaValor/1609.34)*this.PrecioEstablecido).toFixed(0);
    console.log("datos:",this.DataM[0].rows[0].elements[0].distance.text);
    console.log("datos:",this.DataM[0].rows[0].elements[0].duration.text);

    });
    this.modalService.open(content, { windowClass: 'dark-modal' });

  }

 

    frm:FormGroup;
    viaje:any;
    frm0:FormGroup;
    ngOnInit() {
      this.PrecioEstablecido=120;
          this.frm=this.pf.group({
            Cliente:['',[Validators.required,Validators.maxLength(50)]],
            AsignacionOperador:['',[Validators.required,Validators.maxLength(50)]],
            AsignacionCaja:['',[Validators.required,Validators.maxLength(50)]],
            AsignacionCamion:['',[Validators.required,Validators.maxLength(50)]],
            Mercancia:['',[Validators.required,Validators.maxLength(100)]],
            Origen:['',[Validators.required,Validators.maxLength(30)]],
            Destino:['',[Validators.required,Validators.maxLength(30)]],
            Costo:['[0-9]*',[Validators.required,Validators.maxLength(6)]],
            EstadoViaje:['',[Validators.required]],
          FechaTraslado:['',[Validators.required]],
           FechaEntrega:['',[Validators.required]],
            Tipo:['',[Validators.required,Validators.maxLength(50)]],
            Pago:['',[Validators.required,Validators.maxLength(30)]],
            PagoMin:['',[Validators.maxLength(6)]]
          

         
         
            
          
      
            
          });

          this.frm0=this.pf0.group({
            NumeroV:['',[Validators.required,Validators.maxLength(50)]]
            
          

         
         
            
          
      
            
          });
          
        }
        s: string;
        Resultado:boolean;
        IDVAIJE:String;
        guardar(){
          
        
          this.myslqViaje.postdata(this.viaje).subscribe(newpres => { 
            this.Resultado=false;
            if(newpres.success==true )
            {
              this.IDVAIJE=newpres.data.insertId;
              
              this.frm.reset();
              console.log("inserto correctamente",newpres.data.insertId);
              this.Resultado=true;
              this.CC=true;
            }else
            this.Resultado=false;
    
          });
          
          
          }


          saveViaje(){
            var min=0;
            if(this.frm.get('PagoMin').value==null || this.frm.get('PagoMin').value<1)
              {min=0;
                console.log("pagomin;",min)
              }
              else
                min=this.frm.get('PagoMin').value;

                const saveViaje={
                  Cliente:this.IDDDD,
                  AsignacionCaja:this.frm.get('AsignacionCaja').value,
                  AsignacionCamion:this.frm.get('AsignacionCamion').value,
                  Mercancia:this.frm.get('Mercancia').value,
                  Origen:this.frm.get('Origen').value,
                  Destino:this.frm.get('Destino').value,
                  Costo:this.frm.get('Costo').value,
                  EstadoViaje:this.frm.get('EstadoViaje').value,                
                  Tipo:this.frm.get('Tipo').value,
                  FechaEntrega:this.frm.get('FechaEntrega').value,
                  FechaTraslado:this.frm.get('FechaTraslado').value,
                  AsignacionOperador:this.frm.get('AsignacionOperador').value ,
                  Pago:this.frm.get('Pago').value,
                  PagoMin:min
                }
                return saveViaje;
              }
      
              ngDoCheck(){
             try {
               if(this.frm.get('Pago').value=="PAGOMinimo")
                this.BpMinimo=true;
                else
                  this.BpMinimo=false;
              if(this.frm.get('Destino').value!=null && String(this.frm.get('Destino').value).length>4 &&String(this.frm.get('Origen').value).length>4){
                
                    this.b=true;
                 }
                    else
                    this.b=false;
             } catch (error) {
               
             }
              
               
              }          
              Cliente:any[]=[];
              error:boolean=false;
              IDDDD:String;
              buscar(){

                this.mysqlC.getUsuarioNombre(this.frm0.get('NumeroV').value)
                .subscribe(Cliente=>{
                
                  this.Cliente=Cliente[0];
           
               console.log(this.IDDDD)
                  if(this.Cliente!=null){
                 
                    this.nombreCliente=this.frm0.get('NumeroV').value
                    this.resul=true;
                    this.IDDDD=(Cliente[0].Id);
                  }
                
                  else
                  this.error=true;
                  
                  
                });
              }
CC:boolean=false;
              redirigir(){

              if(this.CC==true){
                this.router.navigate(['/ViajeL']);

              }
             
              }
            
}
