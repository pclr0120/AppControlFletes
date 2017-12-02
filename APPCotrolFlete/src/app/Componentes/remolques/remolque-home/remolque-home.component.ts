import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remolque-home',
  templateUrl: './remolque-home.component.html',
  styleUrls: ['./remolque-home.component.css']
})
export class RemolqueHomeComponent implements OnInit {

  hoy:any=new Date;
  constructor() { 
  
  }

  ngOnInit() {
  }

}
