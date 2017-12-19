

  import { Injectable } from '@angular/core';
  import {Headers,Http,Response}from '@angular/http';
  import 'rxjs/Rx';
  @Injectable()
  export class  GoogleMapsService {
    presUrl='https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyBaMMzIEpQfVqohNoip8_U8vinVUAiyWe0';
    preURL='https://api.mercadolibre.com/sites/MLU/search?q=ipad&offset=1&limit=3&price=2500-5500.json';
  
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
        getdata(id$: string,id0$: string ){
          const url=`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${id$}&destinations=${id0$}&key=AIzaSyBaMMzIEpQfVqohNoip8_U8vinVUAiyWe0`;
        console.log(url);
          
          return this.http.get(url).map(res=>{ console.log('servicio',res.json());
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
  
  