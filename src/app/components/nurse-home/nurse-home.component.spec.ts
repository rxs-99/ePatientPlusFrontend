import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseHomeComponent } from './nurse-home.component';

describe('NurseHomeComponent', () => {
  let component: NurseHomeComponent;
  let fixture: ComponentFixture<NurseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
