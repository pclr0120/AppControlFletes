import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

declare const google: any;
@Component({
  selector: 'app-big-maps',
  templateUrl: './big-maps.component.html',
  styleUrls: ['./big-maps.component.css']
})
export class BigMapsComponent implements OnInit {



  @Input()Destino:String;
  @Input()Origen:String;

  constructor() { }



  ngOnInit() {
    let chicago = this.Destino;
    let indianapolis = this.Origen;
  
    let map = new google.maps.Map(document.getElementById('map'), {
      center: chicago,
      zoom: 7
    });
  
    let directionsDisplay = new google.maps.DirectionsRenderer({
      map: map
    });
  
    // Set destination, origin and travel mode.
    let request = {
      destination: chicago,
      origin: indianapolis,
      travelMode: 'DRIVING'
    };
  
    // Pass the directions request to the directions service.
    let directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status) {
      if (status == 'OK') {
        // Display the route on the map.
        directionsDisplay.setDirections(response);
        
      }
    });
}

}
