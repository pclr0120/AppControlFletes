import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import {LoginComponent} from './Componentes/Login/login.component';
import {routing,appRoutingProviders} from './app.routing';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { HomeComponent } from './Componentes/home/home.component';
import { FacturaComponent } from './Componentes/factura/factura.component';
import { ProveedorComponent } from './Componentes/proveedor/proveedor.component';
import {ReactiveFormsModule}from '@angular/forms';
import { MenuPrincipalComponent } from './Componentes/menu-principal/menu-principal.component';
import { OlvideMiPasswordComponent } from './Componentes/olvide-mi-password/olvide-mi-password.component';
import { MunuUsuarioComponent } from './Componentes/munu-usuario/munu-usuario.component';
import { LogOutComponent } from './Componentes/log-out/log-out.component';





@NgModule({
  declarations: [
    AppComponent,LoginComponent, InicioComponent, HomeComponent, FacturaComponent, ProveedorComponent, MenuPrincipalComponent, OlvideMiPasswordComponent, MunuUsuarioComponent, LogOutComponent
  ],
  imports: [
    BrowserModule , FormsModule,routing,ReactiveFormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
