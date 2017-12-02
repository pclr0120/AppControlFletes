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
import { EmpleadoListaComponent } from './Componentes/empleados/empleado-lista/empleado-lista.component';
import { UsuarioPostComponent } from './usuarios/usuario-post/usuario-post.component';

import {MysqlService}from '../app/servicios/mysql.service'; 
import {HttpModule} from '@angular/http';
import { EmpleadoEditComponent } from './Componentes/empleados/empleado-edit/empleado-edit.component';
import {MysqlUserService}from '../app/servicios/mysql-user.service';
import { UserLComponent } from './usuarios/user-l/user-l.component';
import { UserEditComponent } from './usuarios/user-edit/user-edit.component'; 

import { BuscadorPipe } from './BuscadorPipe/Buscador.pipe';
import {MysqlVehiculoService}from '../app/servicios/mysql-vehiculo.service';
import { VehiculoLComponent } from './Componentes/vehiculos/vehiculo-l/vehiculo-l.component';
import { VehiculoEditComponent } from './Componentes/vehiculos/vehiculo-edit/vehiculo-edit.component';
import { UsuarioHomeComponent } from './usuarios/usuario-home/usuario-home.component';
import { ClienteRComponent } from './cliente/cliente-r/cliente-r.component';
import {ClienteService}from '../app/servicios/cliente.service';
import { ClienteLComponent } from './cliente/cliente-l/cliente-l.component';
import { ClienteHComponent } from './cliente/cliente-h/cliente-h.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ClienteEditComponent } from './cliente/cliente-edit/cliente-edit.component';
import { RemolqueRComponent } from './Componentes/remolques/remolque-r/remolque-r.component';
import {RemolqueService}from '../app/servicios/remolque.service';
import { RemolqueLComponent } from './componentes/remolques/remolque-l/remolque-l.component';
import { RemolqueEditComponent } from './componentes/remolques/remolque-edit/remolque-edit.component';
import { RemolqueHomeComponent } from './componentes/remolques/remolque-home/remolque-home.component';
import {ViajeService}from '../app/servicios/viaje.service';
@NgModule({
  declarations: [
    AppComponent,LoginComponent, InicioComponent, HomeComponent, FacturaComponent, 
    MenuPrincipalComponent, OlvideMiPasswordComponent, MunuUsuarioComponent,
     LogOutComponent, MenuControlComponent, ProveedoresComponent, AddProveedorComponent, 
     HomeProveedorComponent, FacturaDetalleComponent, FacturacionComponent, FacturaHomeComponent,
      VehiculosComponent, VehiculoComponent, VehiculosHOMEComponent, EmpleadoComponent, EmpleadoHomeComponent, 
      ControlViajesComponent, ControlViajesHomeComponent, ViajeComponent, MapsComponent, ViajeConsultarComponent,
       MenuBotonesComponent, WebHomeComponent, 
    WebMenuComponent, PanelAdminComponent, EmpleadoListaComponent, UsuarioPostComponent, EmpleadoEditComponent, UserLComponent, 
    UserEditComponent,BuscadorPipe, VehiculoLComponent, VehiculoEditComponent, UsuarioHomeComponent, ClienteRComponent, ClienteLComponent, ClienteHComponent, ClienteEditComponent, RemolqueRComponent, RemolqueLComponent, RemolqueEditComponent, RemolqueHomeComponent
  ],
  imports: [NgbModule,
    BrowserModule , FormsModule,routing,ReactiveFormsModule,HttpModule
  ],
  providers: [appRoutingProviders,MysqlService,MysqlUserService,MysqlVehiculoService,ClienteService,RemolqueService,ViajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
