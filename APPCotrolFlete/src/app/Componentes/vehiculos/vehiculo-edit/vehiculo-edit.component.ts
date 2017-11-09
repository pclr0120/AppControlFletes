import { Component, OnInit, DoCheck } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MysqlVehiculoService } from '../../../servicios/mysql-vehiculo.service';

@Component({
  selector: 'app-vehiculo-edit',
  templateUrl: './vehiculo-edit.component.html',
  styleUrls: ['./vehiculo-edit.component.css']
})
export class VehiculoEditComponent implements OnInit {

  constructor(private pf: FormBuilder,private activatedRouter:ActivatedRoute, private router:Router, private mysql: MysqlVehiculoService) { 


    this.activatedRouter.params
    .subscribe(parametros=>{
      this.id=parametros['id'];
      console.log("dentroID",this.id);
      this.mysql.getdata(this.id)
      .subscribe(Vehiculo=>{
        console.log("dentro1",Vehiculo[0]);
        this.Vehiculo=Vehiculo[0];
    
        
        
      })
    });
  }
  frm:FormGroup;
  vehiculo:any;
  Vehiculo:any[]=[];
  s: string;

  id:string;


  Resultado:boolean;
  Mostar:boolean;
  ngOnInit() {

    this.frm=this.pf.group({
      Marca:['',[Validators.required,Validators.maxLength(50)]],
      Modelo:['',[Validators.required,Validators.maxLength(50)]],
      Anio:['',[Validators.required,Validators.maxLength(40)]],
      Tipo:['',[Validators.required,Validators.maxLength(30)]],
      NumeroChasis:['',[Validators.required,Validators.maxLength(50)]],
      CapacidadCarga:['',[Validators.required,Validators.maxLength(10)]],
      Combustible:['',Validators.required],
      Placa:['',[Validators.required,Validators.maxLength(20)]],
      KmRecorrido:['',[Validators.required,Validators.maxLength(10)]],
      Estatus:['',Validators.required],
      Poliza:['',[Validators.required,Validators.maxLength(20)]],
      FechaRR:['',Validators.required],
      FechaV:['',Validators.required],
      Fotos:[''],
      NumProv:['',[Validators.required,Validators.maxLength(10)]],
      KmRecorridoM:['',[Validators.required,Validators.maxLength(10)]]
      
  

      
    });
  }
  onSubmit(){
    
      this.vehiculo=this.saveVehiculo();
      this.mysql.putdata(this.vehiculo,this.id).subscribe(newpres=>{
    
        if(newpres.data.msg=='success')
        {
          this.frm.reset();
          console.log("inserto correctamente");
          this.Resultado=true;
          this.router.navigate(['/VehiculoL']);

        }else
        this.Resultado=false;
      
      });
      
     

    
    }

    saveVehiculo(){
      
          const saveVehiculo={
            Marca:this.frm.get('Marca').value,
            
            Placa:this.frm.get('Placa').value,
            Modelo:this.frm.get('Modelo').value,
            Tipo:this.frm.get('Tipo').value,
            Anio:this.frm.get('Anio').value,
            CapacidadCarga:this.frm.get('CapacidadCarga').value,
            NumeroChasis:this.frm.get('NumeroChasis').value,
            Combustible:this.frm.get('Combustible').value,
            KmRecorrido:this.frm.get('KmRecorrido').value,
            Estatus:this.frm.get('Estatus').value,
            Poliza:this.frm.get('Poliza').value,
            FechaRR:this.frm.get('FechaRR').value,
            FechaV:this.frm.get('FechaV').value,
            NumProv:this.frm.get('NumProv').value
            ,            KmRecorridoM:this.frm.get('KmRecorridoM').value
            

          }
          return saveVehiculo;
        }

}