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
   user:string;
   pass:string;
 ngDoCheck(){
try {
  this.user=JSON.parse(localStorage.getItem('user'));
  this.pass=JSON.parse(localStorage.getItem('pass'));
  if(this.user!=null)
      this.Login=true;
   else 
    this.Login=false;
} catch (error) {
  if(this.user!=null)
  this.Login=true;
else 
this.Login=false;
  
}

     
      
  




 }
  ngOnInit() {
    
    if(localStorage.getItem('b')=="1")
        this.Login=true;
       
        

    
    
  }
  

}
