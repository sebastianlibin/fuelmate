import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerviewComponent } from './careerview.component';

describe('CareerviewComponent', () => {
  let component: CareerviewComponent;
  let fixture: ComponentFixture<CareerviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
