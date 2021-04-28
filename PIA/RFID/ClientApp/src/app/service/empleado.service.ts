import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingreso } from '../interface/ingreso';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  server = 'http://localhost:5001/ingresos'

  constructor(private http: HttpClient) { 
  }

  getIngresosbyDia(Dia: number){
    const path = '${this.server}/${Dia}'; //
    return this.http.get<Ingreso[]>(path);
  }
}
