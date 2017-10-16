import { Component, OnInit,OnChanges,SimpleChanges,DoCheck } from '@angular/core';

@Component({
  selector: 'app-munu-usuario',
  templateUrl: './munu-usuario.component.html',
  styleUrls: ['./munu-usuario.component.css']
})
export class MunuUsuarioComponent implements OnInit, OnChanges {
  Login:boolean=true;
  constructor() {

    console.log(localStorage.getItem('b'));
    
   }
   ngOnChanges(changes: SimpleChanges){

  
    
   }
 ngDoCheck(){

  let user=JSON.parse(localStorage.getItem('user'));
  let pass=JSON.parse(localStorage.getItem('pass'));
  if(user=='pclr@pclr.com' && pass=='123'){
 
      this.Login=true;
   
     
      
  
  }else
       this.Login=false;



 }
  ngOnInit() {
    
    if(localStorage.getItem('b')=="1")
        this.Login=true;
       
        

    
    
  }
  

}
