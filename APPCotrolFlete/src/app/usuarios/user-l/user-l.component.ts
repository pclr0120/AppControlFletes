import { Component, OnInit } from '@angular/core';
import { MysqlUserService } from '../../servicios/mysql-user.service';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
import { Coleccion } from '../../BuscadorPipe/Coleccion';
@Component({
  selector: 'app-user-l',
  templateUrl: './user-l.component.html',
  styleUrls: ['./user-l.component.css']
})
export class UserLComponent implements OnInit {




Resultado:boolean;

 Buscar: Coleccion = new Coleccion();
  usuarios:any[]=[];
  constructor( private mysql: MysqlUserService) { 

    this.mysql.getUsuarios().
    subscribe(usuarios=>{
      for(const id$ in usuarios){
      
          
        const p=usuarios[id$];
        p.id$=id$;
        this.usuarios.push(usuarios[id$]);
       
        
    }
  });
 

  }

  eliminarUsuario(id$){
    
        this.mysql.delUsuario(id$).subscribe(res=>{
          if(res.success){
            this.Resultado=true;
          }else
          this.Resultado=false;
          console.log(res);
          this.usuarios=[];
           this.mysql.getUsuarios().
    subscribe(usuarios=>{
      for(const id$ in usuarios){
      
          
        const p=usuarios[id$];
        p.id$=id$;
        this.usuarios.push(usuarios[id$]);
       
        
    }
  });
          
        });

       }

  ngOnInit() {
  }

}
