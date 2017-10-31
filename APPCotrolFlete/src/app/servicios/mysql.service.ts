import { Injectable } from '@angular/core';
import {Headers,Http,Response}from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class MysqlService {
  presUrl='http://localhost:3000/empleados';
  preURL='http://localhost:3000/empleados';
    constructor(private http:Http) { }
  
    postUsuario(usuario: any){
     // console.log(usuario);
      
      const newpres=JSON.stringify(usuario);
      const headers=new Headers({'Content-Type': 'application/json'});
      return this.http.post(this.presUrl,newpres,{headers}).map(res=>{
        console.log('servicio',res.json());
      return res.json();
      
      })
      
      }
 
      getUsuarios(){
        try {
          return this.http.get(this.presUrl).map(res=>res.json());
        } catch (error) {
          console.log('errroror'+error);
          
        }
       
      
      
      }
      getUsuario(id$: string ){
        const url=`${this.preURL}/${id$}`;
        console.log(url);
        
        return this.http.get(url).map(res=>{ console.log('servicio',res.json());
          return res.json(); 
        });
         
      }
      putUsuario(usuario: any, id$:string ){
        const newpre=JSON.stringify(usuario);
        const headers=new Headers({'Content-Type': 'application/json'});
        const url=`${this.preURL}/${id$}.json`;
        return this.http.put(url,newpre,{headers})
        .map(res=>{console.log(res.json())
        return res.json();
        })
  
      }
  
      delUsuario(id$:string){
        const url=`${this.preURL}/${id$}.json`;
        return this.http.delete(url).map(res=>res.json());
  
      }

}
