import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileValidationComponent } from './profile-validation.component';

describe('ProfileValidationComponent', () => {
  let component: ProfileValidationComponent;
  let fixture: ComponentFixture<ProfileValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
