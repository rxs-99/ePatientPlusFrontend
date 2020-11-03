import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorMedicationComponent } from './doctor-medication.component';

describe('DoctorMedicationComponent', () => {
  let component: DoctorMedicationComponent;
  let fixture: ComponentFixture<DoctorMedicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorMedicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
