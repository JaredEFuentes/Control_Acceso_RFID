import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresosEmpleadoComponent } from './ingresos-empleado.component';

describe('IngresosEmpleadoComponent', () => {
  let component: IngresosEmpleadoComponent;
  let fixture: ComponentFixture<IngresosEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresosEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresosEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
