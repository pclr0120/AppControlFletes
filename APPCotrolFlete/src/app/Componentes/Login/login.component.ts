import { Component,OnInit, ViewChild,DoCheck } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';

@Component({
  selector: 'Login-app',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent {
  title = 'Login';
  User:string;
  password:any;
  @ViewChild('formpro')formpro: NgForm;
  login:any;
  b:boolean;

  LoginForm:FormGroup;
Login:any;
  constructor(private router:Router,private pf:FormBuilder){

 
  
    
    this.title="Login"
    this.login={
      User:'',
      Password:''
    }
  }


  ngOnInit() {
    
        this.LoginForm=this.pf.group({
          User:['',[Validators.required,Validators.maxLength(30)]],
          Password:['',[Validators.required,Validators.maxLength(10)]],
     
    
          
        });
        
      }
  onSubmit(){
    
          
    this.login.User=this.formpro.value.User;
    this.login.Password=this.formpro.value.Password;
    if(this.login.User=="pclr@pclr.com")
        if(this.login.Password=="123"){
          this.router.navigate(['inicio']);
      
          localStorage.setItem('login','true');
          this.Login=this.saveLogin();
          
              this.LoginForm.reset();      
            localStorage.setItem('user',JSON.stringify(this.login.User));
            localStorage.setItem('pass',JSON.stringify(this.login.Password));
            this.b=false;
        }else{
          this.b=true;
          console.log(this.b);
          
        }
         
   
   

  }

  saveLogin(){
    
        const saveLogin={
          id:this.LoginForm.get('User').value,
          articulol:this.LoginForm.get('Password').value,
 
        }
        return saveLogin;
      }
  ngDoCheck(){
    if(this.login.User!="pclr@pclr.com")
        if(this.login.Password!="123"){

            localStorage.setItem('login','false');
            localStorage.clear();
            
           }
  }           
}
