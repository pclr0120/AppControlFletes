import { Injectable } from '@angular/core';
import {Headers,Http,Response}from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class MysqlService {
  presUrl='http://localhost:3000/users';
  preURL='http://localhost:3000/users';
    constructor(private http:Http) { }
  
    postPresupuesto(presupuesto: any){
      console.log(presupuesto);
      
      const newpres=JSON.stringify(presupuesto);
      const headers=new Headers({'Content-Type': 'application/json'});
      return this.http.post(this.presUrl,newpres,{headers}).map(res=>{
        console.log(res.json());
      return res.json();
      
      })
      
      }
 
      getPresupuestos(){
        try {
          return this.http.get(this.presUrl).map(res=>res.json());
        } catch (error) {
          console.log('errroror'+error);
          
        }
       
      
      
      }
      getPresupuesto(id$: string ){
        const url=`${this.preURL}/${id$}.json`;
        return this.http.get (url)
        .map(res=>res.json());
      }
      putPresupuesto(presupuesto: any, id$:string ){
        const newpre=JSON.stringify(presupuesto);
        const headers=new Headers({'Content-Type': 'application/json'});
        const url=`${this.preURL}/${id$}.json`;
        return this.http.put(url,newpre,{headers})
        .map(res=>{console.log(res.json())
        return res.json();
        })
  
      }
  
      delPresupuesto(id$:string){
        const url=`${this.preURL}/${id$}.json`;
        return this.http.delete(url).map(res=>res.json());
  
      }

}
