import { Component, OnInit ,DoCheck} from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';

import {Router,ActivatedRoute}from '@angular/router';
import { MysqlUserService } from '../../servicios/mysql-user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id:string;
  usuario:any;
  UsuarioForm:FormGroup;
  Usuario:any[]=[];

  Resultado:boolean;
  Mostar:boolean;
  NEBander: boolean;
  NeFound: boolean;
  NeVal: boolean;
  s: string;
  constructor(private pf: FormBuilder, private mysql: MysqlUserService, private router:Router,
    private activatedRouter:ActivatedRoute) {
      
      this.activatedRouter.params
      .subscribe(parametros=>{
        this.id=parametros['id'];
        console.log("dentroID",this.id);
        this.mysql.getUsuario(this.id)
        .subscribe(Usuario=>{
          console.log("dentro",Usuario[0]);
          this.Usuario=Usuario[0];
          console.log("dentro",this.Usuario);
          
          
        })
      });
  
      
   
   }
  

   ngOnInit() {
    
        this.UsuarioForm = this.pf.group({
    
          NE: [''],
          Usuario: ['', [Validators.required, Validators.maxLength(50), Validators.email]],
          Password: ['', [Validators.required, Validators.minLength(6)]],
          Estatus: ['', [Validators.required, Validators.minLength(1)]],
          Rol: ['', [Validators.required, Validators.minLength(2)]],
          
    
    
    
        });
        this.onChanges();
        if (this.UsuarioForm.get('Tipo').value == "EMP") {
          this.NEBander = true;
  
  
        } else
          this.NEBander = false;
      }
    
      onChanges(){
    
     
      }
      ngDoCheck() {
        
       
        
        
          }
      onSubmit(){
    
      this.usuario=this.saveUsuario();
      console.log('jale:',this.usuario.Usuario);
      
      this.mysql.putUsuario(this.usuario,this.id).subscribe(newpres=>{
     
    
      
        if(newpres.data.msg=='success')
        {
          this.UsuarioForm.reset();
          console.log("inserto correctamente");
          this.Resultado=true;
          this.router.navigate(['/UserL']);

        }else
        this.Resultado=false;
      });

  
    
        
      
      }
      saveUsuario() {
        
            const saveUsuario = {
              Usuario: this.UsuarioForm.get('Usuario').value,
              NE: this.UsuarioForm.get('NE').value,
              Rol:this.UsuarioForm.get('Rol').value,
              
              Password: this.UsuarioForm.get('Password').value,
              Estatus: this.UsuarioForm.get('Estatus').value
              
        
            }
            return saveUsuario;
          }

}
