import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmpleadoSubmit } from 'src/app/interfaces/empleadoSubmit';
import { ApiRestService } from 'src/app/Services/api-rest.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {
  form: FormGroup;

  constructor(private _snackBar: MatSnackBar,private fb: FormBuilder, private api: ApiRestService, private router: Router) 
  { 
    this.form = fb.group({
      Nombre: ['', Validators.required],
      Rfid: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  agregarEmpleado(){
    const empleado: EmpleadoSubmit = {
      Nombre: this.form.value.Nombre,
      Rfid: this.form.value.Rfid
    }

    this.api.postEmpleado(empleado).subscribe(data => {
      console.log(data);
    });

    this.router.navigate(['/Empleados']);

    this._snackBar.open('El empleado a sido agregado', '', {
      duration: 1500,
      horizontalPosition: 'center', 
      verticalPosition: 'bottom'
    })
  }
}
