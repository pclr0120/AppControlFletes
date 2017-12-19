import { Component, OnInit } from '@angular/core';
import {FireGPSService} from '../servicios/fire-gps.service';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
import { log } from 'util';
@Component({
  selector: 'app-gpsregistro',
  templateUrl: './gpsregistro.component.html',
  styleUrls: ['./gpsregistro.component.css']
})
export class GPSRegistroComponent implements OnInit {
  GpsData:any;
  frm:FormGroup;
  IdGPS:string="pclr";
  Origen:any;
  Destino:any;
  Idchoferr:any;
  constructor(private gps: FireGPSService,private pf:FormBuilder) { 
    this.Idchoferr="1";
  }

  ngOnInit() {

    this.frm=this.pf.group({
      // nombre:['',[Validators.required,Validators.maxLength(50)]],
       // email:['',[Validators.required,Validators.maxLength(50)]],
       // rfc:['',[Validators.required,Validators.maxLength(13)]],
       // direccion:['',[Validators.required,Validators.maxLength(30)]],
       // cp:['',[Validators.required,Validators.maxLength(5)]],
       Lat:['',Validators.required],
       Fecha:['',Validators.required],
      Log:['',Validators.required],
      Nombre:['',Validators.required],
  
 
       
     });
     this.Idchoferr="1";
  }
  onSubmit(){
    this.
   GpsData=this. saveGps();
   console.log("ENTRO0",this.GpsData);
   this.gps.postPresupuesto(this.GpsData).subscribe(newpres=>{
     console.log("ENTRO",this.GpsData);
   })
    this.frm.reset();
    
    }

    hola(){

      this.
      GpsData=this. saveGps();
      console.log("ENTRO0",this.GpsData);
      this.gps.postPresupuesto(this.GpsData).subscribe(newpres=>{
        console.log("ENTRO",this.GpsData);
      })
    }
    Mandar(){
      this.IdGPS=this.frm.get('Nombre').value;
      this.Origen="Los mochis";
      this.Destino="mochicahui";
      this.Idchoferr="1";
    }
   saveGps(){
  
      const saveGps={
        // nombre:this.Frm.get('nombre').value,
        // email:this.Frm.get('email').value,
        Fecha:this.frm.get('Fecha').value,
         Lat:this.frm.get('Lat').value,
         Log:this.frm.get('Log').value,
         Nombre:this.frm.get('Nombre').value
    
      }
      return saveGps;
    }
}
