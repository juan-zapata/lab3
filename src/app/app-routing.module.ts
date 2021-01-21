import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmpleadoListarComponent} from './componentes/empleado-listar/empleado-listar.component';
import {EmpleadoAgregarComponent} from './componentes/empleado-agregar/empleado-agregar.component';
import {EmpleadoEditarComponent} from './componentes/empleado-editar/empleado-editar.component';


const routes: Routes = [
  {path:'listar',component:EmpleadoListarComponent},
  {path:'add',component:EmpleadoAgregarComponent},
  {path:'edit',component:EmpleadoEditarComponent},
  {path:'edit/:codigo',component:EmpleadoEditarComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
