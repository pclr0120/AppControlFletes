import {ModuleWithProviders} from'@angular/core';
import{Routes,RouterModule} from '@angular/router';

import{LoginComponent}from './Componentes/Login/login.component';
import{InicioComponent}from './Componentes/inicio/inicio.component';
import{HomeComponent}from './Componentes/home/home.component';
import {FacturaComponent}from './Componentes/factura/factura.component';

import { OlvideMiPasswordComponent } from './Componentes/olvide-mi-password/olvide-mi-password.component';
import { LogOutComponent } from './Componentes/log-out/log-out.component';
import { ProveedoresComponent } from './Modulos/proveedores/proveedores.component';
import { HomeProveedorComponent } from './Componentes/PROVEEDORES/home-proveedor/home-proveedor.component';
import { FacturacionComponent } from './Modulos/facturacion/facturacion.component';
import { FacturaHomeComponent } from './Componentes/factura-home/factura-home.component';
import { VehiculoComponent } from './Modulos/vehiculo/vehiculo.component';
import { EmpleadoComponent } from './Componentes/empleados/empleado/empleado.component';
import { EmpleadoHomeComponent } from './Componentes/Empleados/empleado-home/empleado-home.component';
import { ViajeComponent } from './Modulos/viaje/viaje.component';
import { ViajeConsultarComponent } from './Componentes/Viajes/viaje-consultar/viaje-consultar.component';
import { WebHomeComponent } from './Modulos/pagina-web-cliente/componentes/web-home/web-home.component';
import { UsuarioPostComponent } from './usuarios/usuario-post/usuario-post.component';
import { EmpleadoListaComponent } from './Componentes/empleados/empleado-lista/empleado-lista.component';
import { EmpleadoEditComponent } from './Componentes/empleados/empleado-edit/empleado-edit.component';
import { UserLComponent } from './usuarios/user-l/user-l.component'; 
import { UserEditComponent } from './usuarios/user-edit/user-edit.component'; 
import { VehiculoEditComponent } from './Componentes/vehiculos/vehiculo-edit/vehiculo-edit.component';
import { VehiculosHOMEComponent } from './Componentes/vehiculos-home/vehiculos-home.component';
import { UsuarioHomeComponent } from './usuarios/usuario-home/usuario-home.component';

import { VehiculoLComponent } from './Componentes/vehiculos/vehiculo-l/vehiculo-l.component';
import { ClienteRComponent } from './cliente/cliente-r/cliente-r.component';
import { ClienteLComponent } from './cliente/cliente-l/cliente-l.component';
import { ClienteHComponent } from './cliente/cliente-h/cliente-h.component';
import { ClienteEditComponent } from './cliente/cliente-edit/cliente-edit.component';
import { RemolqueRComponent } from './Componentes/remolques/remolque-r/remolque-r.component';
import { RemolqueLComponent } from './componentes/remolques/remolque-l/remolque-l.component';
import { RemolqueEditComponent } from './componentes/remolques/remolque-edit/remolque-edit.component';
import { RemolqueHomeComponent } from './componentes/remolques/remolque-home/remolque-home.component';
import { ViajeListasComponent } from './componentes/viajes/viaje-listas/viaje-listas.component';
import { ViajeEditComponent } from './componentes/viajes/viaje-edit/viaje-edit.component';
import { ControlViajesHomeComponent } from './Componentes/Viajes/control-viajes-home/control-viajes-home.component';
const appRoutes:Routes=[
    {path:'',component:InicioComponent},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'inicio',component:InicioComponent},
    {path:'home',component:HomeComponent},
    {path:'facturaHOME',component:FacturaHomeComponent},
    {path:'facturaR',component:FacturacionComponent},
    
   {path:'proveedor',component:ProveedoresComponent},
    {path:'HomeProveedor',component:HomeProveedorComponent},
    {path:'OlvideMiPassword',component:OlvideMiPasswordComponent},
    {path:'LogOut',component:LogOutComponent},

    {path:'Vehiculos',component:VehiculoComponent},
    {path:'VehiculoEdit/:id',component:VehiculoEditComponent},
    {path:'VehiculosH',component:VehiculosHOMEComponent},
    
    {path:'VehiculoL',component:VehiculoLComponent},
    
    {path:'Empleados',component:EmpleadoHomeComponent},
    {path:'EmpleadosR',component:EmpleadoComponent},
    {path:'EmpleadosL',component:EmpleadoListaComponent},
    {path:'EmpleadosEdit/:id',component:EmpleadoEditComponent},
    
    {path:'Viajes',component:ViajeComponent}
    ,
    {path:'ViajesC',component:ViajeConsultarComponent}
    ,
    {path:'WebHome',component:WebHomeComponent},
    {path:'UserPost',component:UsuarioPostComponent},
    {path:'UserL',component:UserLComponent},
    {path:'UserEdit/:id',component:UserEditComponent},
    {path:'UserH',component:UsuarioHomeComponent},

    {path:'ClienteR',component:ClienteRComponent},
        {path:'ClienteL',component:ClienteLComponent},
        {path:'ClienteH',component:ClienteHComponent}
                ,        {path:'ClienteEdit/:id',component:ClienteEditComponent}
                ,        {path:'RemolqueR',component:RemolqueRComponent}
           
                ,        {path:'RemolqueL',component:RemolqueLComponent}
                ,        {path:'RemolqueEdit/:id',component:RemolqueEditComponent}
                ,        {path:'RemolqueHome',component:RemolqueHomeComponent}
                ,        {path:'ViajeL',component:ViajeListasComponent},
                {path:'ViajeEdit/:id',component:ViajeEditComponent},
                {path:'ViajesHome',component:ControlViajesHomeComponent},
                
                   
                
                        
        
    
    

];
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);