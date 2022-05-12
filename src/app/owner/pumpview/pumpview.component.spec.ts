import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpviewComponent } from './pumpview.component';

describe('PumpviewComponent', () => {
  let component: PumpviewComponent;
  let fixture: ComponentFixture<PumpviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumpviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PumpviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
