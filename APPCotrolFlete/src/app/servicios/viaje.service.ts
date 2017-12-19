import { Injectable } from '@angular/core';
import {Headers,Http,Response}from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class  ViajeService{
  presUrl='http://localhost:3000/viajes';
  preURL='http://localhost:3000/viajes';

    constructor(private http:Http) { }
    data:any;
    postdata(data: any){
      console.log("servicio",data);
      
      const newpres=JSON.stringify(data);
      const headers=new Headers({'Content-Type': 'application/json'});
      return this.http.post(this.presUrl,newpres,{headers}).map(res=>{
        console.log('servicio',res.json());
      return res.json();
      
      })
      
      }
 
      getdatas(){
        try {
          return this.http.get(this.presUrl).map(res=>{ console.log('servicio',res.json());
          res.json();
           return res.json();
           
         });
        } catch (error) {
          console.log('errroror'+error);
          
        }
       
      
      
      }
      getdata(id$: string ){
        const url=`${this.preURL}/${id$}`;
        console.log('viajeServicio:',url);
        
        return this.http.get(url).map(res=>{ console.log('servicioviaje',res.json());
         res.json();
          return res.json();
          
        });
         
      }
      putdata(data: any, id$:string ){
        const newpre=JSON.stringify(data);
        console.log("servidorFata",data);
        
        const headers=new Headers({'Content-Type': 'application/json'});
        const url=`${this.preURL}/${id$}`;
        return this.http.put(url,newpre,{headers})
        .map(res=>{console.log(res.json())
        return res.json();
        })
  
      }
  
      deldata(id$:string){
        const url=`${this.preURL}/${id$}`;
        return this.http.delete(url).map(res=>res.json());
  
      }

}
