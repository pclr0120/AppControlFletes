import { Component,ViewChild, ChangeDetectorRef,OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {FireGPSService} from '../servicios/fire-gps.service';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
import 'rxjs/add/observable/of';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DirectionsRenderer } from '@ngui/map';
import { MysqlService } from '../servicios/mysql.service';
@Component({
  selector: 'app-maps-gps',
  templateUrl: './maps-gps.component.html',
styles: [
  `
    .custom-icon {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color:blue;
      border: 2px solid white;
      color:white;
      font-size:20px;
      text-align:center;
    }
  `,
]
})
export class MapsGPSComponent  implements OnInit  {


  @ViewChild(DirectionsRenderer) directionsRendererDirective: DirectionsRenderer;
  
    directionsRenderer: google.maps.DirectionsRenderer;
    directionsResult: google.maps.DirectionsResult;
    direction: any = {
      origin: 'penn station, new york, ny',
      destination: '260 Broadway New York NY 10007',
      travelMode: 'DRIVING'
    };
    b:boolean=false;
  
  public positions= [];
  public centers=[];
  public center:any;
  public count: number = 0;
  Data:any[]=[];
  @Input()Idd:String;
  @Input()Origen0:String;
  @Input()Destino0:String;
  @Input()Idchofer:String;
  bb:boolean=false;
  DataF:any[]=[];
  Fecha:any;
 
  empleado:any;

  Empleado:any[]=[];
  public 

  constructor(private mysql: MysqlService,private cdr: ChangeDetectorRef,private pf:FormBuilder,private GpsData:FireGPSService,private modalService: NgbModal) {
    this.positions = this.getRandomMarkers();
    this.GpsData.getPresupuestos().
    subscribe(Data=>{
      for(const id$ in Data){

        const p=Data[id$];
        p.id$=id$;
        this.Data.push(Data[id$]);
        console.log("DATAGPS:",this.Data);
    }
    this.DataF.push(this.Data.filter(this.FiltroId));
    this.Fecha=this.DataF[0][0].Fecha;
  });
  console.log("holita",this.Idchofer)
  this.mysql.getUsuario(String(this.Idchofer))
  .subscribe(Empleado=>{
    console.log("dentro",Empleado[0]);
    this.Empleado=Empleado[0];
    console.log("dentro",this.empleado);
    
    
  });

  console.log("destino y origen:",this.Destino0,this.Origen0);

  }

  getRandomMarkers() {
    let randomLat: number, randomLng: number;
  
    let positions = [];

      randomLat = 25.950783;
      randomLng = -108.932202;
      positions.push([randomLat, randomLng]);
   
    return positions;
  }

  getLoc() {
    this.DataF.push(this.Data.filter(this.FiltroId));
    let randomLat: number, randomLng: number;
    console.log("HOLASADAS:",this.DataF);
  
    let positions = [];

      randomLat = Number(this.DataF[0][0].Lat);
      randomLng =Number(this.DataF[0][0].Log);
      positions.push([randomLat, randomLng]);
   
    return positions;
  }
  FiltroId(element) { 
    
        return (element.Nombre=='pclr'); 
        
      } 
  showMarkersFromObservable() {
    this.DataF.push(this.Data.filter(this.FiltroId));
    console.log("GPSMAPS:hola",this.DataF[0][0].Log,this.DataF[0][0].Lat);
    let locali=[Number(this.DataF[0][0].Lat),Number(this.DataF[0][0].Log)];
    console.log("Locali:",locali);
    //locali.push([this.frm.get('Lat0').value],this.frm.get('Log0').value);

    Observable.of(this.getLoc()) // Think this as http call
      .subscribe( positions => {
        this.positions = locali;
        console.log("Posiciones",this.positions);
      });
  }

 
  frm:FormGroup;
  ngOnInit() {
   
    console.log("destino y origen:",this.Destino0,this.Origen0);
    this.directionsRendererDirective['initialized$'].subscribe( directionsRenderer => {
      this.directionsRenderer = directionsRenderer;
    });
  }

  openC(contentM) {
    console.log("holita",this.Idchofer)
    this.mysql.getUsuario(String(this.Idchofer))
    .subscribe(Empleado=>{
      console.log("dentro",Empleado[0]);
      this.Empleado=Empleado[0];
      console.log("dentro",this.empleado);
      
      
    });
    this.modalService.open(contentM, { windowClass: 'dark-modal' });

  }
  directionsChanged() {
    this.directionsResult = this.directionsRenderer.getDirections();
    this.cdr.detectChanges();
  }

  showDirection() {
    this.directionsRendererDirective['showDirections'](this.direction);
  }
  showDirec(){
    console.log("mostrando");
    console.log("destino y origen:",this.Destino0,this.Origen0);
  this.direction.origin=this.Origen0;
this.direction.destination=this.Destino0;
this.center=this.Origen0;

this.b=true;
  }

  HideMap(){
    console.log("ocultar");
    this.b=false;
  }



  hola(){
this.bb=true;


  }
  marker = {
    display: true
  
  };

  clicked({target: marker}) {


    marker.nguiMapComponent.openInfoWindow('iw', marker);
  }

  hideMarkerInfo() {
    this.marker.display = !this.marker.display;
  }
}


