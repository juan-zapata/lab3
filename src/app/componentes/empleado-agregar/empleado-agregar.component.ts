import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EmpleadoService} from 'src/app/services/empleado.service';
import {empleado} from '../../modelos/empleado';

@Component({
  selector: 'app-empleado-agregar',
  templateUrl: './empleado-agregar.component.html',
  styleUrls: ['./empleado-agregar.component.css']
})
export class EmpleadoAgregarComponent implements OnInit {
  empleados: empleado = new empleado();
  constructor( private router:Router,private service:EmpleadoService) { }

  ngOnInit() {
  }

  Guardar(empleados:empleado){
    this.service.createEmpleado(empleados)
    .subscribe(data=>{
      alert("Se agrego con exito....!!!!");
      this.router.navigate(["listar"]);
    })
  }

}
