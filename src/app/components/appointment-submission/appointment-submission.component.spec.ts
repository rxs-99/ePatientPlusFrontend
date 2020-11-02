import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSubmissionComponent } from './appointment-submission.component';

describe('AppointmentSubmissionComponent', () => {
  let component: AppointmentSubmissionComponent;
  let fixture: ComponentFixture<AppointmentSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
