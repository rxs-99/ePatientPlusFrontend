import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorOptionsComponent } from './doctor-options.component';

describe('DoctorOptionsComponent', () => {
  let component: DoctorOptionsComponent;
  let fixture: ComponentFixture<DoctorOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
