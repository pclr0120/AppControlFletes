import { Component, OnInit, DoCheck } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {RemolqueService } from '../../../servicios/remolque.service';
@Component({
  selector: 'app-remolque-r',
  templateUrl: './remolque-r.component.html',
  styleUrls: ['./remolque-r.component.css']
})
export class RemolqueRComponent implements OnInit {

  constructor(private pf: FormBuilder,private activatedRouter:ActivatedRoute, private router:Router, private mysql: RemolqueService) { }
  frm:FormGroup;
  remolque:any;
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
    
      Estatus:['',Validators.required]
 
     
      
  

      
    });
  }
  onSubmit(){
    
      this.remolque = this.saveremolque();
      this.mysql.postdata(this.remolque).subscribe(newpres => { 
        this.Resultado=false;
        if(newpres.success==true )
        {
          this.frm.reset();
          console.log("inserto correctamente");
          this.Resultado=true;
          this.router.navigate(['/RemolqueL']);
        }else
        this.Resultado=false;

      });
      
     

    
    }

    saveremolque(){
      
          const saveremolque={
            Marca:this.frm.get('Marca').value,
            
       
            Modelo:this.frm.get('Modelo').value,
            Tipo:this.frm.get('Tipo').value,
            Anio:this.frm.get('Anio').value,
            CapacidadCarga:this.frm.get('CapacidadCarga').value,
            NumeroChasis:this.frm.get('NumeroChasis').value,
       
            Estatus:this.frm.get('Estatus').value,
         
            
            
            // cp:this.facturaForm.get('cp').value,
            // tipo:this.facturaForm.get('tipo').value,
            // iva:this.facturaForm.get('iva').value,
            // base:this.facturaForm.get('base').value,
            // total:this.facturaForm.get('total').value
          }
          return saveremolque;
        }

}