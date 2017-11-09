import { Component,OnInit, ViewChild,DoCheck } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
import { MysqlUserService } from '../../servicios/mysql-user.service';

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
Usuario:any;
  constructor(private router:Router,private pf:FormBuilder,private mysql: MysqlUserService){

 
  
    
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
    try {
      this.Login=this.saveLogin();
      
        this.mysql.getLog(this.Login.User)
        .subscribe(Usuario=>{
          console.log("dentro",Usuario);
          this.Usuario=Usuario[0];
     
          
         console.log(this.Login.pass);
         
         if(this.Usuario!=null)
              if(this.Login.pass==this.Usuario.pass){
                this.router.navigate(['inicio']);
            
                localStorage.setItem('login','true');
              
                
                    this.LoginForm.reset();      
                  localStorage.setItem('user',JSON.stringify(this.Login.User));
                  localStorage.setItem('pass',JSON.stringify(this.Login.pass));
                  this.b=false;
              }else{
                this.b=true;
                console.log(this.b);
                
              }

              else{
                this.b=true;
                console.log(this.b);


              }
        });
    } catch (error) {
      this.b=true;
      console.log(this.b);
    }
    
 
    
         
   
   

  }

  saveLogin(){
    
        const saveLogin={
          User:this.LoginForm.get('User').value,
          pass:this.LoginForm.get('Password').value,
 
        }
        return saveLogin;
      }
  ngDoCheck(){
    // if(this.login.User!="pclr@pclr.com")
    //     if(this.login.Password!="123"){

    //         localStorage.setItem('login','false');
    //         localStorage.clear();
            
    //        }
  }           
}
