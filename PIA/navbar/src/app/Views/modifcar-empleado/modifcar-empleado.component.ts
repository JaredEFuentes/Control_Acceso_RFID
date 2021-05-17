import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoSubmitWI } from 'src/app/interfaces/empleadoSubmit';
import { ApiRestService } from 'src/app/Services/api-rest.service';

@Component({
  selector: 'app-modifcar-empleado',
  templateUrl: './modifcar-empleado.component.html',
  styleUrls: ['./modifcar-empleado.component.css']
})
export class ModifcarEmpleadoComponent implements OnInit {
  form: FormGroup;

  constructor(private rutaActiva: ActivatedRoute, private _snackBar: MatSnackBar, private fb: FormBuilder, private api: ApiRestService, private router: Router) {
    this.form = fb.group({
      Id: [''],
      Nombre: ['', Validators.required],
      Rfid: ['', Validators.minLength(10), Validators.maxLength(50)]
    });
  }

  ngOnInit(): void {
    this.form.value.Id = this.rutaActiva.snapshot.params.id;
  }

  modificarEmpleado() {
    const empleado: EmpleadoSubmitWI = {
      Id: this.form.value.Id,
      Nombre: this.form.value.Nombre,
      Rfid: this.form.value.Rfid
    }

    let rfid;
    if (this.form.value.Nombre == "") {
      this.api.getEmpleadoById(this.form.value.Id).subscribe(data => {
        this.form.value.Nombre = data.Nombre;
        rfid = data.Rfid;
      })
    }
    if (this.form.value.Rfid == "") {
      this.form.value.Rfid = rfid;
    }

    this.api.modifyEmpleado(empleado).subscribe(data => {
      console.log(data);
    });

    this.router.navigate(['/Empleados']);

    this._snackBar.open('El empleado a sido modificado', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
