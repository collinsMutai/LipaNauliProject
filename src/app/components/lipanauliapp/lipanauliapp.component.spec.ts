import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipanauliappComponent } from './lipanauliapp.component';

describe('LipanauliappComponent', () => {
  let component: LipanauliappComponent;
  let fixture: ComponentFixture<LipanauliappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LipanauliappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LipanauliappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
