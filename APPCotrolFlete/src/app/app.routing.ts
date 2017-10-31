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
    {path:'Empleados',component:EmpleadoHomeComponent},
    {path:'EmpleadosR',component:EmpleadoComponent},
    {path:'EmpleadosL',component:EmpleadoListaComponent},
    {path:'EmpleadosEdit/:id',component:EmpleadoEditComponent},
    
    {path:'Viajes',component:ViajeComponent}
    ,
    {path:'ViajesC',component:ViajeConsultarComponent}
    ,
    {path:'WebHome',component:WebHomeComponent},
    {path:'UserPost',component:UsuarioPostComponent}
    

];
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);