import { Component, OnInit,ViewChild,DoCheck } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators}from '@angular/forms';

import { ClienteService } from '../../servicios/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'util';
@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {
  id:string;
  frm:FormGroup;
  cliente:any;
  Resultado:boolean;
  Mostar:boolean;
  fileBrowser:any;
  url:any;
  a:any;
  Cliente:any[]=[];
  
  
    constructor(private pf: FormBuilder, private activatedRouter:ActivatedRoute, private router:Router,private mysql: ClienteService) {

  
      this.activatedRouter.params
      .subscribe(parametros=>{
        this.id=parametros['id'];
        console.log("dentroID",this.id);
        this.mysql.getUsuario(this.id)
        .subscribe(Cliente=>{
          console.log("dentro",Cliente[0]);
          this.Cliente=Cliente[0];
          console.log("dentro",this.Cliente);
          
          
        })
      });

     }
  
    readUrl(event:any) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
    
        reader.onload = (event:any) => {
          this.url = event.target.result;
        }
    
        reader.readAsDataURL(event.target.files[0]);
        console.log('dentro',event.target.files[0]);
        this.a=event.target.files[0]['name'];
        console.log("dsad00",this.a);
        
        this.upload(event.target.result);
        
      }
    }
    upload(hola:any) {
      this.fileBrowser = hola;
      if (this.fileBrowser.files && this.fileBrowser.files[0]) {
        const formData = new FormData();
        formData.append("image", this.fileBrowser.files[0]);
      //  this.projectService.upload(formData, this.project.id).subscribe(res => {
          // do stuff w/my uploaded file
        
        //});
      }
    }
   
    ngOnInit() {
  
      this.frm=this.pf.group({
        Nombre:['',[Validators.required,Validators.maxLength(100),Validators.minLength(10)]],
        RFC:['',[Validators.required,Validators.maxLength(13),Validators.minLength(13)]],
        Direccion:['',[Validators.required,Validators.maxLength(50)]],
        Empresa:['',[Validators.required,Validators.maxLength(30)]],
       

        Estatus:['',[Validators.required,Validators.maxLength(30)]],
       Telefono:['',[Validators.required,Validators.minLength(10)]],
       Foto:[''],

       Usuario:['',[Validators.required,Validators.maxLength(50),Validators.email]],
       Pass:['',[Validators.required,Validators.minLength(6)]],
       Pass2:['',[Validators.required]],
       
        // iva:this.iva,
        // total:this.total
  
        
      });
      this.onChanges();
    }
  
    onChanges(){
  
   
    }
    onSubmit(){
      console.log('jale:',this.cliente);
      this.cliente=this.savecliente();

      
      this.mysql.putUsuario(this.cliente,this.id).subscribe(newpres=>{
     
    
      
        if(newpres.data.msg=='success')
        {
          this.frm.reset();
          console.log("inserto correctamente",this.id);
          this.Resultado=true;
          this.router.navigate(['/ClienteL']);

        }else
        this.Resultado=false;
      });
   
  
      
    
    }
    savecliente(){
  
      const savecliente={
        Nombre:this.frm.get('Nombre').value,
        Empresa:this.frm.get('Empresa').value,
        Direccion:this.frm.get('Direccion').value,
       // Ciudad:this.frm.get('Ciudad').value,
       
        
        Telefono:this.frm.get('Telefono').value,

        Estatus:this.frm.get('Estatus').value,
        RFC:this.frm.get('RFC').value,
         Foto:this.a,
Usuario:this.frm.get('Usuario').value,
Pass:this.frm.get('Pass').value,
Pass2:this.frm.get('Pass2').value

         
        // iva:this.frm.get('iva').value,
        // base:this.frm.get('base').value,
        // total:this.frm.get('total').value
      }
      return savecliente;
    }

    conf:boolean;

    ngDoCheck(){
      if(this.frm.get('Pass').value==this.frm.get('Pass2').value)

    this.conf=true;
  
        else
        this.conf=false;
        
 
    }   

}