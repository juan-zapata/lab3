import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { EmpleadoService} from '../../services/empleado.service';
import {empleado} from '../../modelos/empleado';

@Component({
  selector: 'app-empleado-editar',
  templateUrl: './empleado-editar.component.html',
  styleUrls: ['./empleado-editar.component.css']
})
export class EmpleadoEditarComponent implements OnInit {

  
  empleados: empleado = new empleado();
  constructor(private router:Router, private service:EmpleadoService, private route:ActivatedRoute) { 
    
  }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get("codigo"));
  }

  Editar(empleados:empleado){
    let id=localStorage.getItem("id");
    this.service.getEmpleadoId(Number(id))
    .subscribe(data=>{
      this.empleados=data;
    })
  }
  Actualizar(empleados:empleado){

    this.service.updatePersona(empleados, this.route.snapshot.paramMap.get("codigo"))
    .subscribe(data=>{
      alert("Se actualizo con exito...!!!!");
      this.router.navigate(["listar"])
    })
  }

}
