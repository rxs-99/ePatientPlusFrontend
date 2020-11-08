import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTokenExpiredComponent } from './auth-token-expired.component';

describe('AuthTokenExpiredComponent', () => {
  let component: AuthTokenExpiredComponent;
  let fixture: ComponentFixture<AuthTokenExpiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthTokenExpiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthTokenExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
