import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionsInfoComponent } from './prescriptions-info.component';

describe('PrescriptionsInfoComponent', () => {
  let component: PrescriptionsInfoComponent;
  let fixture: ComponentFixture<PrescriptionsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
