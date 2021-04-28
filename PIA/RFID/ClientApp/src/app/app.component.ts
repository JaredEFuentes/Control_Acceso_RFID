import { Component } from '@angular/core';
import { Ingreso } from './interface/ingreso';
import { EmpleadoService } from './service/empleado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  ingresos: Ingreso[];

  constructor(private empleadoService: EmpleadoService){ }

  update(){
    var time = new Date()
    this.empleadoService.getIngresosbyDia(time.getDay()).subscribe(
      arg =>{ 
        this.ingresos = arg
      });
  }
}
