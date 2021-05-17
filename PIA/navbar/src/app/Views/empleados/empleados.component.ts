import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/interfaces/empleado';
import { EmpleadoSubmitWI } from 'src/app/interfaces/empleadoSubmit';
import { ApiRestService } from 'src/app/Services/api-rest.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre'];
  dataSource = new MatTableDataSource<Empleado>();
  empleados: Empleado[] = [];

  constructor(private router: Router,private api:ApiRestService, private _snackBar: MatSnackBar) {
    this.getEmpleados();
  }

  ngOnInit(): void {
  }

  getEmpleados(){
    this.api.getEmpleados().subscribe(data => {
      this.empleados = data;
      this.dataSource = new MatTableDataSource(this.empleados);
    });

    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  DeleteEmpleado(id: number): void{
    if(confirm("¿Esta seguro de eliminar al empleado?")){
      this.api.deleteEmpleado(id).subscribe(data => {
        console.log(data)
      })

      this.router.navigate(['/Empleados']);

      this._snackBar.open('El empleado a sido eliminado', '', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
    }
  }

  HabilitarEmpleado(id: number): void{
    if(confirm("¿Esta seguro de modificar al empleado?")){
      this.api.habilitarEmpleado(id).subscribe(data => {
        console.log(data)
      })

      this.router.navigate(['/Empleados']);

      this._snackBar.open('El empleado a sido modificado', '', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
    }
  }
}
