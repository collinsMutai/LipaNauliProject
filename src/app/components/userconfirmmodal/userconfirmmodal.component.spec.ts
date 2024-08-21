import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserconfirmmodalComponent } from './userconfirmmodal.component';

describe('UserconfirmmodalComponent', () => {
  let component: UserconfirmmodalComponent;
  let fixture: ComponentFixture<UserconfirmmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserconfirmmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserconfirmmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
