import { Component } from '@angular/core';
import { IngresosEmp } from '../interface/ingresosEmp';
import { IngresosWOEmp } from '../interface/ingresoWOEmp';
import { IngresosService } from '../services/ingresos.service';

@Component({
  selector: 'app-ingresos-empleado',
  templateUrl: './ingresos-empleado.component.html',
  styleUrls: ['./ingresos-empleado.component.css']
})
export class IngresosEmpleadoComponent{
  empleadoId: number;
  data: IngresosEmp;
  fecha: Date;
  x: IngresosWOEmp[];

  constructor(private ingresosService: IngresosService) { }

  update(){
    this.ingresosService.getIngresosbyEmp(this.empleadoId).subscribe(
      arg =>{ 
        this.data = arg
      });
    
    if(this.data == null){
        alert("No existe es Id de empleado")
    }
  }

  updateDate(){
    this.data.Ingresos.forEach(element => {
      if(element.Fecha.getDate() == this.fecha.getDate()){
        this.x.push(element);
      }
    });
    if(this.x == null){
      alert("No se encuentran registros con esa fecha")
    }
  }
}
