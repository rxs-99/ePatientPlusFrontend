import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTokenNotFoundComponent } from './auth-token-not-found.component';

describe('AuthTokenNotFoundComponent', () => {
  let component: AuthTokenNotFoundComponent;
  let fixture: ComponentFixture<AuthTokenNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthTokenNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthTokenNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
