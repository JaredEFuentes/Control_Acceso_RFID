import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../interface/ingreso';
import { IngresosService } from '../services/ingresos.service';
import Ingresos from '../../assets/data/ingresos.json';
import { Observable } from 'rxjs';
import { IngresoVM } from '../interface/ingresoVM';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  fecha: Date;
  ingresos: IngresoVM[];
  x: IngresoVM;

  constructor(private ingresosService: IngresosService){ }
  
  update(){
    this.ingresosService.getIngresosbyDia(this.fecha.getDay(),this.fecha.getMonth(),this.fecha.getFullYear()).subscribe(
      arg =>{ 
        arg.forEach(element =>{
          this.x.RegistroId = element.RegistroId;
          this.x.Nombre = element.Nombre;
          this.x.Fecha = element.Fecha.getDay() + "/" + element.Fecha.getMonth + "/" + element.Fecha.getFullYear();
          this.x.Hora = element.Fecha.getHours() + ":" + element.Fecha.getMinutes() + "/" + element.Fecha.getSeconds();
          
          this.ingresos.push(this.x); 
        })
      });
  }
  
}


