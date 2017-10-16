

import { Articulo } from '../ModeloDatos/Articulo';
export class Factura
{   
    
    public   Folio:string;
    public  RFC:string;
    public  Nombre:string;
    public  Domicilio:string;
    public  Telefono:string;
    public  Email:string;
    public Fecha:string;
    public SubTotal:number;
    public IVA:any;  
    public Total:number;  
    public Id:number;
    public Cantidad:number;
    public Precio:number;
    public articulo:Array<Articulo>=[];
    
    public agregarF(){
        this.Folio;
        this.Nombre;


    }
    public AgregarArticulo(Id:number,Nombre:string,Descripcion:string,Cantidad:number,Precio:number,IVA:number) {
        let a=new Articulo;
        a.Nombre=Nombre;
        a.Id=Id;
        a.Descripcion=Descripcion;
        a.Cantidad=Cantidad;
        a.Precio=Precio;
        a.IVA=IVA;
        a.Total= Precio*Cantidad;
        this.articulo.push(a);

    }
    public CalcularSubtotal():number {
        this.SubTotal=0;
        this.Total=0;
        this.IVA=0;
        let t:number;
        for (var index = 0; index < this.articulo.length; index++) {

            this.SubTotal+= this.articulo[index].Precio *this.articulo[index].Cantidad ;
            t=(this.articulo[index].Precio * this.articulo[index].IVA)*this.articulo[index].Cantidad;
            this.IVA+=Number(t);
            this.articulo[index].Total=this.articulo[index].Precio *this.articulo[index].Cantidad;
                      
        }
        this.Total=this.SubTotal+this.IVA;
        return this.SubTotal;   
    }
    myValue;
    public edit(i):void{
        this.Id=this.articulo[i].Id; 
        this.Precio=this.articulo[i].Precio;
        this.Cantidad=this.articulo[i].Cantidad;
        this.myValue = i;
        this.CalcularSubtotal();
    }

 public Update()
    {
        this.articulo[this.myValue].Id=this.Id;
        this.articulo[this.myValue].Precio=this.Precio;
        this.articulo[this.myValue].Cantidad=this.Cantidad;      
        //console.log(this.articulo[this.myValue].Precio); 
    }    
  
 

    



}