import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifcarEmpleadoComponent } from './modifcar-empleado.component';

describe('ModifcarEmpleadoComponent', () => {
  let component: ModifcarEmpleadoComponent;
  let fixture: ComponentFixture<ModifcarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifcarEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifcarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
