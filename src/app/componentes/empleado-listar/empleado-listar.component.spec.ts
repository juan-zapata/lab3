import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoListarComponent } from './empleado-listar.component';

describe('EmpleadoListarComponent', () => {
  let component: EmpleadoListarComponent;
  let fixture: ComponentFixture<EmpleadoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
