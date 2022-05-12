import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpregistrationComponent } from './pumpregistration.component';

describe('PumpregistrationComponent', () => {
  let component: PumpregistrationComponent;
  let fixture: ComponentFixture<PumpregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumpregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PumpregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
