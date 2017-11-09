import { Component, OnInit, DoCheck } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MysqlUserService } from '../../servicios/mysql-user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  templateUrl: './usuario-post.component.html',
  selector: 'app-usuario-post',
  styleUrls: ['./usuario-post.component.css']
})
export class UsuarioPostComponent implements OnInit {

  UsuarioForm: FormGroup;
  Usuario: any;
  usuario: any[] = [];
  NEBander: boolean;
  NeFound: boolean;
  NeVal: boolean;
  s: string;
  Resultado:boolean;
  constructor(private pf: FormBuilder,private activatedRouter:ActivatedRoute, private router:Router, private mysql: MysqlUserService) {

    this.mysql.getUsuarios().
      subscribe(usuario => {
      
        for (const id$ in usuario) {

          const p = usuario[id$];
          p.id$ = id$;
          this.usuario.push(usuario[id$]);


        }
      });


  }


  
  ngDoCheck() {




  }
  ngOnInit() {

    this.UsuarioForm = this.pf.group({
      NE: ['', [Validators.required, Validators.maxLength(6)]],
      
      Usuario: ['', [Validators.required, Validators.maxLength(50), Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      Rol: ['', [Validators.required, Validators.minLength(2)]],
      Estatus: ['', [Validators.required, Validators.minLength(1)]]
      
      
      


    });
    this.onChanges();
  }

  onChanges() {

    // this.UsuarioForm.valueChanges.subscribe(valor=>{
    //   this.base=valor.base;
    //   this.tipo=valor.tipo;
    //   this.UsuarioForm.value.iva=this.base * this.tipo;
    //   this.UsuarioForm.value.total=this.base +(this.base *this.tipo);



    // });
  }
  onSubmit() {
    try {
      this.Usuario = this.saveUsuario();
      this.mysql.postUsuario(this.Usuario).subscribe(newpres => { 
        this.Resultado=false;
        if(newpres.success==true )
        {
          this.UsuarioForm.reset();
          console.log("inserto correctamente");
          this.Resultado=true;
          this.router.navigate(['/UserL']);
        }else
        this.Resultado=false;

      });
      
     

    } catch (e) {

      console.log("Error insertar");
    }

  }
  saveUsuario() {

    const saveUsuario = {
      Usuario: this.UsuarioForm.get('Usuario').value,
      NE: this.UsuarioForm.get('NE').value,

      Password: this.UsuarioForm.get('Password').value,
      Rol:this.UsuarioForm.get('Rol').value,
      Estatus:this.UsuarioForm.get('Estatus').value
      

     
      
      
    }
    return saveUsuario;
  }

}
