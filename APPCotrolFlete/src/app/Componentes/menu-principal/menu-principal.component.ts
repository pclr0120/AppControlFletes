import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  title:string="AppControlFlete";
  Menu:boolean;
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
      
      
    if(localStorage.getItem('login')=='true'){

      this.Menu=true;
      
    }
     
      
    else{
      this.Menu=false;
      localStorage.clear();
    

    }
  

    
    
    

  }

}
