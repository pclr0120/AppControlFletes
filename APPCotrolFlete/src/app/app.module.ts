import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import {LoginComponent} from './Componentes/Login/login.component';
import {routing,appRoutingProviders} from './app.routing';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { HomeComponent } from './Componentes/home/home.component';
import { FacturaComponent } from './Componentes/factura/factura.component';

import {ReactiveFormsModule}from '@angular/forms';
import { MenuPrincipalComponent } from './Componentes/menu-principal/menu-principal.component';
import { OlvideMiPasswordComponent } from './Componentes/olvide-mi-password/olvide-mi-password.component';
import { MunuUsuarioComponent } from './Componentes/munu-usuario/munu-usuario.component';
import { LogOutComponent } from './Componentes/log-out/log-out.component';

import { MenuControlComponent } from './Modulos/menu-control/menu-control.component';
import { ProveedoresComponent } from './Modulos/proveedores/proveedores.component';
import { AddProveedorComponent } from './Componentes/proveedores/add-proveedor/add-proveedor.component';
import { HomeProveedorComponent } from './Componentes/PROVEEDORES/home-proveedor/home-proveedor.component';
import { FacturaDetalleComponent } from './Componentes/factura-detalle/factura-detalle.component';
import { FacturacionComponent } from './Modulos/facturacion/facturacion.component';
import { FacturaHomeComponent } from './Componentes/factura-home/factura-home.component';
import { VehiculosComponent } from './Componentes/vehiculos/vehiculos.component';
import { VehiculoComponent } from './Modulos/vehiculo/vehiculo.component';
import { VehiculosHOMEComponent } from './Componentes/vehiculos-home/vehiculos-home.component';
import { EmpleadoComponent } from './Componentes/empleados/empleado/empleado.component';
import { EmpleadoHomeComponent } from './Componentes/Empleados/empleado-home/empleado-home.component';
import { ControlViajesComponent } from './Componentes/viajes/control-viajes/control-viajes.component';
import { ControlViajesHomeComponent } from './Componentes/Viajes/control-viajes-home/control-viajes-home.component';
import { ViajeComponent } from './Modulos/viaje/viaje.component';
import { MapsComponent } from './Componentes/Viajes/maps/maps.component';
import { ViajeConsultarComponent } from './Componentes/Viajes/viaje-consultar/viaje-consultar.component';
import { MenuBotonesComponent } from './Componentes/menu-botones/menu-botones.component';
import { WebHomeComponent } from './Modulos/pagina-web-cliente/componentes/web-home/web-home.component';
import { WebMenuComponent } from './Modulos/pagina-web-cliente/Componentes/web-menu/web-menu.component';
import { PanelAdminComponent } from './Componentes/admin/panel-admin/panel-admin.component';





@NgModule({
  declarations: [
    AppComponent,LoginComponent, InicioComponent, HomeComponent, FacturaComponent, MenuPrincipalComponent, OlvideMiPasswordComponent, MunuUsuarioComponent, LogOutComponent, MenuControlComponent, ProveedoresComponent, AddProveedorComponent, HomeProveedorComponent, FacturaDetalleComponent, FacturacionComponent, FacturaHomeComponent, VehiculosComponent, VehiculoComponent, VehiculosHOMEComponent, EmpleadoComponent, EmpleadoHomeComponent, ControlViajesComponent, ControlViajesHomeComponent, ViajeComponent, MapsComponent, ViajeConsultarComponent, MenuBotonesComponent, WebHomeComponent, 
    WebMenuComponent, PanelAdminComponent
  ],
  imports: [
    BrowserModule , FormsModule,routing,ReactiveFormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
