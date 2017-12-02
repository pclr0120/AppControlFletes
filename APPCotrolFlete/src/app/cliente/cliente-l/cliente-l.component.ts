import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../servicios/cliente.service';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';
import { Coleccion } from '../../BuscadorPipe/Coleccion';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cliente-l',
  templateUrl: './cliente-l.component.html',
  styleUrls: ['./cliente-l.component.css']
})
export class ClienteLComponent implements OnInit {



  Resultado:boolean;
   Buscar: Coleccion = new Coleccion();
    usuarios:any[]=[];
    constructor( private mysql: ClienteService) { 
  
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