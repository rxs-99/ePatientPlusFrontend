import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointmentActionComponent } from './doctor-appointment-action.component';

describe('DoctorAppointmentActionComponent', () => {
  let component: DoctorAppointmentActionComponent;
  let fixture: ComponentFixture<DoctorAppointmentActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAppointmentActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAppointmentActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
