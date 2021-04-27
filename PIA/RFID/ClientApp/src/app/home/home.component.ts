import { Component } from '@angular/core';
import { Ingreso } from '../interface/ingreso';
import { EmpleadoService } from '../service/empleado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  ingresos: Ingreso[]

  constructor(private empleadoService: EmpleadoService){ }
  
  ngOninit(){
    this.update()
  }

  update(){
    var time = new Date()
    this.empleadoService.getIngresosbyDia(time.getDay()).subscribe(
      arg =>{ 
        this.ingresos = arg
      });
  }
}
