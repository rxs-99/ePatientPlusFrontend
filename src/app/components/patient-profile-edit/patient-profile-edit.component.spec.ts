import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProfileEditComponent } from './patient-profile-edit.component';

describe('PatientProfileEditComponent', () => {
  let component: PatientProfileEditComponent;
  let fixture: ComponentFixture<PatientProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientProfileEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
