import { Component, OnInit, DoCheck } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RemolqueService } from '../../../servicios/remolque.service';
@Component({
  selector: 'app-remolque-edit',
  templateUrl: './remolque-edit.component.html',
  styleUrls: ['./remolque-edit.component.css']
})
export class RemolqueEditComponent implements OnInit {


  constructor(private pf: FormBuilder,private activatedRouter:ActivatedRoute, private router:Router, private mysql:RemolqueService) { 
    
    
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
        
          Estatus:['',Validators.required]
         
          
      
    
          
        });
      }
      onSubmit(){
        
          this.vehiculo=this.saveremolque();
          console.log("id:",this.id);
          this.mysql.putdata(this.vehiculo,this.id).subscribe(newpres=>{
        
            if(newpres.data.msg=='success')
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