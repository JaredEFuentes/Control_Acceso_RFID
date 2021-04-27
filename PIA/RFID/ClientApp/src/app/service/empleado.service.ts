import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingreso } from '../interface/ingreso';

import { Empleado } from './../interface/empleado'

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  server = 'http://localhost:44360'

  constructor(private http: HttpClient) { }

  getIngresosbyDia(Dia: number){
    const path = '${this.server}/ingresos/${Dia}';
    return this.http.get<Ingreso[]>(path);
  }
}
