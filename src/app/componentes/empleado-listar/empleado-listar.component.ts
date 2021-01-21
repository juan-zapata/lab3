import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EmpleadoService} from '../../services/empleado.service';
import {empleado} from '../../modelos/empleado';

@Component({
  selector: 'app-empleado-listar',
  templateUrl: './empleado-listar.component.html',
  styleUrls: ['./empleado-listar.component.css']
})
export class EmpleadoListarComponent implements OnInit {

  empleados:empleado[];

  constructor(private service:EmpleadoService, private router: Router) {
    this.empleados=[];
   }

  ngOnInit(): void {
    this.service.getEmpleados().subscribe(
      response=>{
        this.empleados=response;
        console.log(this.empleados);
      }
    )
    
  }
  Editar(empleados:empleado):void{
    localStorage.setItem("id",empleados.idPerson.toString());
    this.router.navigate(["edit",empleados.idPerson]);
  }
  Delete(empleados:empleado){
    this.service.deletePersona(empleados)
    .subscribe(data=>{
      this.empleados=this.empleados.filter(p=>p!==empleados);
      alert("usuario eliminado")
    })
  }

}
