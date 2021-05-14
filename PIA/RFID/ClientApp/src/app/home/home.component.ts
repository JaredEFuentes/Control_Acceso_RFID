import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../interface/ingreso';
import { IngresosService } from '../services/ingresos.service';
import Ingresos from '../../assets/data/ingresos.json';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  fecha: Date;
  ingresos: Ingreso[];

  constructor(private ingresosService: IngresosService){ }
  
  update(){
    this.ingresosService.getIngresosbyDia(this.fecha.getDay(),this.fecha.getMonth(),this.fecha.getFullYear()).subscribe(
      arg =>{ 
        this.ingresos = arg
      });
  }
  
}


