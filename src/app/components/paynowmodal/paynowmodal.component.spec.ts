import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaynowmodalComponent } from './paynowmodal.component';

describe('PaynowmodalComponent', () => {
  let component: PaynowmodalComponent;
  let fixture: ComponentFixture<PaynowmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaynowmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaynowmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
