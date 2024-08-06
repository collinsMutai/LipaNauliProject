import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipanaulisliderComponent } from './lipanaulislider.component';

describe('LipanaulisliderComponent', () => {
  let component: LipanaulisliderComponent;
  let fixture: ComponentFixture<LipanaulisliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LipanaulisliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LipanaulisliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
