import {ModuleWithProviders} from'@angular/core';
import{Routes,RouterModule} from '@angular/router';

import{LoginComponent}from './Componentes/Login/login.component';
import{InicioComponent}from './Componentes/inicio/inicio.component';
import{HomeComponent}from './Componentes/home/home.component';
import {FacturaComponent}from './Componentes/factura/factura.component';
import{ProveedorComponent}from './Componentes/proveedor/proveedor.component';
import { OlvideMiPasswordComponent } from './Componentes/olvide-mi-password/olvide-mi-password.component';
import { LogOutComponent } from './Componentes/log-out/log-out.component';
const appRoutes:Routes=[
    {path:'',component:InicioComponent},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'inicio',component:InicioComponent},
    {path:'home',component:HomeComponent},
    {path:'factura',component:FacturaComponent},
    {path:'proveedor',component:ProveedorComponent},
    {path:'OlvideMiPassword',component:OlvideMiPasswordComponent},
    {path:'LogOut',component:LogOutComponent}
    

];
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);