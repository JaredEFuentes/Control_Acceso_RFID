import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingreso } from '../interface/ingreso';
import { IngresoEmp } from '../interface/ingresosEmp';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {
  server = 'http://localhost:5001/api/ingresos'

  constructor(private http: HttpClient) { 
  }

  getIngresosbyDia(day: number, month: number, year: number){
    const path = '${this.server}/${month}/${day}/${year}'; 
    return this.http.get<Ingreso[]>(path);
  }

  getIngresosbyEmp(id: number){
    const path = '${this.server}/byEmp/${id}'; 
    return this.http.get<IngresoEmp>(path);
  }
}
