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
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viaje-edit',
  templateUrl: './viaje-edit.component.html',
  styleUrls: ['./viaje-edit.component.css']
})
export class ViajeEditComponent implements OnInit {

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
  id:string;
  sR:number;
  constructor(private activatedRouter:ActivatedRoute, private router:Router, private pf:FormBuilder,private mysql: RemolqueService,
    private mysqlV: MysqlVehiculoService,private mysqlC: ClienteService,private modalService: NgbModal
  ,private mapsSer:GoogleMapsService, private mysqlO:MysqlService,private myslqViaje:ViajeService) { 

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


this.activatedRouter.params
.subscribe(parametros=>{
  this.id=parametros['id'];
  console.log("dentroID",this.id);
  this.myslqViaje.getdata(this.id)
  .subscribe(viaje=>{
    console.log("dentro1",viaje[0]);
    console.log("dentro1",viaje);
    this.viaje=viaje[0];
    console.log("viaje",this.viaje.Pago);

    if(this.viaje.Pago=="PAGOMinimo")
    this.BpMinimo=false;
    else
      this.BpMinimo=true;

      this.sR=this.viaje.Costo-this.viaje.PagoMin;
      console.log(this.sR);
    
  })
});
 


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
    this.viaje.Pago=((this.distanciaValor/1609.34)*this.PrecioEstablecido).toFixed(0);
    console.log("datos:",this.DataM[0].rows[0].elements[0].distance.text);
    console.log("datos:",this.DataM[0].rows[0].elements[0].duration.text);

    });
    this.modalService.open(content, { windowClass: 'dark-modal' });

  }

 

    frm:FormGroup;
    viaje:any;
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
            Costo:['[0-9]*',[Validators.required,Validators.maxLength(7)]],
            EstadoViaje:['',[Validators.required]],
          FechaTraslado:['',[Validators.required]],
           FechaEntrega:['',[Validators.required]],
               Tipo:['',[Validators.required,Validators.maxLength(50)]],
            Pago:['',[Validators.required,Validators.maxLength(30)]],
            PagoMin:['[0-9]*',[Validators.maxLength(6)]],
            SaldoRestante:['',[Validators.maxLength(6)]]
          

         
         
            
          
      
            
          });

          
        }
        s: string;
        Resultado:boolean;
        guardar(){
          
        
          this.viaje=this.saveViaje();
          this.myslqViaje.putdata(this.viaje,this.id).subscribe(newpres=>{
        
            if(newpres.data.msg=='success')
            {
              this.frm.reset();
              console.log("inserto correctamente");
              this.Resultado=true;
              this.router.navigate(['/ViajeL']);
    
            }else
            this.Resultado=false;
          
          });
          
          
          }


          saveViaje(){
            
                const saveViaje={
                  Cliente:this.frm.get('Cliente').value,
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
                  PagoMin:this.frm.get('PagoMin').value
                }
                return saveViaje;
              }
      
              ngDoCheck(){
             try {

   
              this.sR=this.viaje.Costo-this.viaje.PagoMin;
               if(this.frm.get('Pago').value=="PAGOMinimo")
                this.BpMinimo=false;
                else
                  this.BpMinimo=true;
              if(this.frm.get('Destino').value!=null && String(this.frm.get('Destino').value).length>4 &&String(this.frm.get('Origen').value).length>4){
                
                    this.b=true;
                 }
                    else
                    this.b=false;
             } catch (error) {
               
             }
              
               
              }           
            
}
