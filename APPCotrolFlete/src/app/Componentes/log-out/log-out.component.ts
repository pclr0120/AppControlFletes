import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private router:Router) { 

   
  }

  ngOnInit() {
    console.log("dasds");
   // localStorage.clear();
    localStorage.removeItem('user');
    localStorage.removeItem('pass');
    this.router.navigate(['login']);
  }

}
