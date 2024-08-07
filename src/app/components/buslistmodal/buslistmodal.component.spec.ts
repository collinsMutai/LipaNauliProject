import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuslistmodalComponent } from './buslistmodal.component';

describe('BuslistmodalComponent', () => {
  let component: BuslistmodalComponent;
  let fixture: ComponentFixture<BuslistmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuslistmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuslistmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
