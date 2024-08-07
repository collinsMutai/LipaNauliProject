import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdetailsmodalComponent } from './customerdetailsmodal.component';

describe('CustomerdetailsmodalComponent', () => {
  let component: CustomerdetailsmodalComponent;
  let fixture: ComponentFixture<CustomerdetailsmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerdetailsmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerdetailsmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
