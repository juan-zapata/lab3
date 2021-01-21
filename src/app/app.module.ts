import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoListarComponent } from './componentes/empleado-listar/empleado-listar.component';
import { EmpleadoAgregarComponent } from './componentes/empleado-agregar/empleado-agregar.component';
import { EmpleadoEditarComponent } from './componentes/empleado-editar/empleado-editar.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoListarComponent,
    EmpleadoAgregarComponent,
    EmpleadoEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
