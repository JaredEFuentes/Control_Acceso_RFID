import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../interfaces/empleado';
import { EmpleadoSubmit, EmpleadoSubmitWI } from '../interfaces/empleadoSubmit';
import { Ingreso } from '../interfaces/ingresos';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  url: string = "http://localhost:9090/api"

  constructor(private http: HttpClient) { }

  getIngresos(): Observable<Ingreso[]> {
    let dir = this.url + "/ingresos"
    return this.http.get<Ingreso[]>(dir)
  }

  getEmpleados(): Observable<Empleado[]> {
    let dir = this.url + "/empleado"
    return this.http.get<Empleado[]>(dir);
  }

  getEmpleadoById(id: number): Observable<EmpleadoSubmitWI> {
    let dir = this.url + "/empleado/" + id.toString();
    return this.http.get<EmpleadoSubmitWI>(dir);
  }

  postEmpleado(data: EmpleadoSubmit): Observable<any> {
    let dir = this.url + "/empleado"
    return this.http.post<any>(dir, data);
  }

  deleteEmpleado(id: number): Observable<any> {
    let dir = this.url + "/empleado"
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body: id
    }
    return this.http.delete<any>(dir, options);
  }

  modifyEmpleado(data: EmpleadoSubmitWI): Observable<any> {
    let dir = this.url + "/empleado/"+ data.Id.toString();
    return this.http.put<any>(dir, data);
  }

  habilitarEmpleado(id: number): Observable<any> {
    let dir = this.url + "/empleado/Habilitar/"+ id.toString();
    return this.http.put<any>(dir, "");
  }
}
