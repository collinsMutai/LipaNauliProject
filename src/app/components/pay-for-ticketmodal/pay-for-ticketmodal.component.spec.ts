import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayForTicketmodalComponent } from './pay-for-ticketmodal.component';

describe('PayForTicketmodalComponent', () => {
  let component: PayForTicketmodalComponent;
  let fixture: ComponentFixture<PayForTicketmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayForTicketmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayForTicketmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
