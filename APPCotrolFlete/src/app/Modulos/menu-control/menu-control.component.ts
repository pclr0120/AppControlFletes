import { Component, OnInit,DoCheck } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-menu-control',
  templateUrl: './menu-control.component.html',
  styleUrls: ['./menu-control.component.css']
  
})
export class MenuControlComponent implements OnInit {
MenuControlVisible:boolean=false;
  constructor(private router:Router) { }
  Registrar:any;
  Modificar:any;
  Consultar:any;
  Titulo:any;
  R:any;
  
  ngOnInit() {
    this.Registrar="No hay Opciones..";
    this.R='proveedor';
  }
  ngDoCheck(){
  
    
     
      if(localStorage.getItem('login')=='true'){
     
       this.MenuControlVisible=true;
       this.Titulo=localStorage.getItem('T');
        this.Registrar=localStorage.getItem('R');
        this.Consultar=localStorage.getItem('C');
        this.Modificar=localStorage.getItem('M');

       if (localStorage.getItem('T')==''){
        localStorage.setItem('T','No hay opciones');
        localStorage.setItem('R','');
        localStorage.setItem('C','');
        localStorage.setItem('M','');
       }
          
      
      }else
          this.MenuControlVisible=false;

    
 
    
     }
     seguimiento(pagina:string){
        console.log('holiss');
        
        if(pagina=='R')
        this.router.navigate(['/facturaR']);

     }
}
