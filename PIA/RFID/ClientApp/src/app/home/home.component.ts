import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../interface/ingreso';
import { EmpleadoService } from '../service/empleado.service';
import Ingresos from '../../assets/data/ingresos.json';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private empleadoService: EmpleadoService){ }
  ngOnInit(): void {
  }

  update(){
    var time = new Date()
    this.empleadoService.getIngresosbyDia(time.getDay()).subscribe(
      arg =>{ 
        arg
      });
  }
  
  getJson(): Observable<Array<Ingreso>>{
    return (Ingresos as any);
  }
}
