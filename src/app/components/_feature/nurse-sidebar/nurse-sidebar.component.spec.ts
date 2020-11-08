import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseSidebarComponent } from './nurse-sidebar.component';

describe('NurseSidebarComponent', () => {
  let component: NurseSidebarComponent;
  let fixture: ComponentFixture<NurseSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
