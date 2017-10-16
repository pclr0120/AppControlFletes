import { Component,OnInit, ViewChild,DoCheck } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'Login-app',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent {
  title = 'Login';
  email:string;
  password:any;
  @ViewChild('formpro')formpro: NgForm;
  login:any;
  b:boolean;
  constructor(private router:Router){

 
  
    
    this.title="Login"
    this.login={
      Email:'',
      Password:''
    }
  }
  onSubmit(){
    
          
    this.login.Email=this.formpro.value.Email;
    this.login.Password=this.formpro.value.Password;
    if(this.login.Email=="pclr@pclr.com")
        if(this.login.Password=="123"){
          this.router.navigate(['inicio']);
      
      localStorage.setItem('login','true');
        localStorage.setItem('user',JSON.stringify(this.login.Email));
        localStorage.setItem('pass',JSON.stringify(this.login.Password));
        }
                  

  }
  ngDoCheck(){
    if(this.login.Email!="pclr@pclr.com")
        if(this.login.Password!="123"){

            localStorage.setItem('login','false');
           }
  }           
}
