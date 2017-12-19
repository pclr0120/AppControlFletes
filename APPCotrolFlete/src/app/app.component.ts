import { Component } from '@angular/core';
declare const google: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ControlFletes';


  ngOnInit() {
 


    // let chicago = {lat: 41.85, lng: -87.65};
    // let indianapolis = {lat: 39.79, lng: -86.14};
  
    // let map = new google.maps.Map(document.getElementById('map'), {
    //   center: chicago,
    //   zoom: 7
    // });
  
    // let directionsDisplay = new google.maps.DirectionsRenderer({
    //   map: map
    // });
  
    // // Set destination, origin and travel mode.
    // let request = {
    //   destination: 'los mochis',
    //   origin: 'culiacan',
    //   travelMode: 'DRIVING'
    // };
  
    // // Pass the directions request to the directions service.
    // let directionsService = new google.maps.DirectionsService();
    // directionsService.route(request, function(response, status) {
    //   if (status == 'OK') {
    //     // Display the route on the map.
    //     directionsDisplay.setDirections(response);
    //   }
    // });
}


 initMap() {
  
}
}
