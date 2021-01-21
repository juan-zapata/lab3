import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {empleado} from '../modelos/empleado';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  Url='http://localhost:8089/persona/listAll';
  Url2 = 'http://localhost:8089/persona/save';
  Url3 = 'http://localhost:8089/persona/update';
  Url4 = 'http://localhost:8089/persona/delete';

  constructor(private _http:HttpClient) { }
  getEmpleados(){

    return this._http.get<empleado[]>(this.Url);
  }
  createEmpleado(empleados:empleado){
    return this._http.post<empleado>(this.Url2,empleados);
  }
  getEmpleadoId(id:number){
    return this._http.get<empleado>(this.Url+"/"+id);
  }
  updatePersona(empleados:empleado, codigo:any){
    console.log(empleados);
    return this._http.put<empleado>(this.Url3+"/"+codigo,empleados);
  }
  deletePersona(empelados:empleado){
    return this._http.delete<empleado>(this.Url4+"/"+empelados.idPerson);
  }

}
