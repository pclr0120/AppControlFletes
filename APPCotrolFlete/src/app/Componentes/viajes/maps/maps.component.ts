import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

@Input()Destino:String;
url:string="https://www.google.com/maps/embed/v1/directions?origin=place_id:ChIJw-o1tkIvuoYRCIgyUkfDJLY&destination=mochicahui&key=AIzaSyCdVzcX3P2avP2r4Fw9bV_O0tXQHi45OEI" ;

  constructor() { 
 
  this.url="https://www.google.com/maps/embed/v1/directions?origin=place_id:ChIJw-o1tkIvuoYRCIgyUkfDJLY&destination=mochicahui&key=AIzaSyCdVzcX3P2avP2r4Fw9bV_O0tXQHi45OEI" ;
    
  }

  ngOnInit() {
      
  console.log("hola:",this.Destino);
  this.url="https://www.google.com/maps/embed/v1/directions?origin=place_id:ChIJw-o1tkIvuoYRCIgyUkfDJLY&destination=mochicahui&key=AIzaSyCdVzcX3P2avP2r4Fw9bV_O0tXQHi45OEI" ;
  
  }

}