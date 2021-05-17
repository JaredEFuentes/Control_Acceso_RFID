import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './Views/crear-empleado/crear-empleado.component';
import { EmpleadosComponent } from './Views/empleados/empleados.component';
import { IngresosComponent } from './Views/ingresos/ingresos.component';
import { InicioComponent } from './Views/inicio/inicio.component';
import { ModifcarEmpleadoComponent } from './Views/modifcar-empleado/modifcar-empleado.component';

const routes: Routes = [
  { path:'Inicio', component: InicioComponent },
  { path:'Ingresos', component: IngresosComponent},
  { path:'Empleados', component: EmpleadosComponent},
  { path:'crear-empleado', component: CrearEmpleadoComponent},
  { path:'modificar-empleado/:id', component: ModifcarEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
