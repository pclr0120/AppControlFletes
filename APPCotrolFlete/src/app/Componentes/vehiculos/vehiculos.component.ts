import { Component, OnInit, DoCheck } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MysqlVehiculoService } from '../../servicios/mysql-vehiculo.service';
@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  constructor(private pf: FormBuilder,private activatedRouter:ActivatedRoute, private router:Router, private mysql: MysqlVehiculoService) { }
  frm:FormGroup;
  vehiculo:any;
  s: string;
  Resultado:boolean;
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
      FechaRegistro:['',Validators.required],
      FechaVencimiento:['',Validators.required],
      Fotos:[''],
      NumProv:['',[Validators.required,Validators.maxLength(10)]],
      KmRecorridoM:['',[Validators.required,Validators.maxLength(10)]]
      
  

      
    });
  }
  onSubmit(){
    
      this.vehiculo = this.saveVehiculo();
      this.mysql.postdata(this.vehiculo).subscribe(newpres => { 
        this.Resultado=false;
        if(newpres.success==true )
        {
          this.frm.reset();
          console.log("inserto correctamente");
          this.Resultado=true;
         // this.router.navigate(['/UserL']);
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
            FechaRegistro:this.frm.get('FechaRegistro').value,
            FechaVencimiento:this.frm.get('FechaVencimiento').value,
            NumProv:this.frm.get('NumProv').value
            ,            KmRecorridoM:this.frm.get('KmRecorridoM').value
            
            
            // cp:this.facturaForm.get('cp').value,
            // tipo:this.facturaForm.get('tipo').value,
            // iva:this.facturaForm.get('iva').value,
            // base:this.facturaForm.get('base').value,
            // total:this.facturaForm.get('total').value
          }
          return saveVehiculo;
        }

}
