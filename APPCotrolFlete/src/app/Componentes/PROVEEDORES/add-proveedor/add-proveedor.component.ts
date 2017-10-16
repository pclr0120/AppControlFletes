import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';


@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css']
})
export class AddProveedorComponent implements OnInit {

  constructor(private pf:FormBuilder) { }

  AddproveedorForm:FormGroup;
  Addproveedor:any;
  ngOnInit() {
    
        this.AddproveedorForm=this.pf.group({
          nombre:['',[Validators.required,Validators.maxLength(50)]],
          email:['',[Validators.required,Validators.maxLength(50)]],
          rfc:['',[Validators.required,Validators.maxLength(13)]],
          direccion:['',[Validators.required,Validators.maxLength(30)]],
          cp:['',[Validators.required,Validators.maxLength(5)]],
          telefono:['',[Validators.required,Validators.maxLength(10)]],
          estado:['',[Validators.required]],
          ciudad:['',[Validators.required]],
          empresa:['',[Validators.required]]
          
        
    
          
        });
        
      }
      onSubmit(){
        
        
        
        }

}
