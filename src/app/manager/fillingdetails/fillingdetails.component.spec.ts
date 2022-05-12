import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillingdetailsComponent } from './fillingdetails.component';

describe('FillingdetailsComponent', () => {
  let component: FillingdetailsComponent;
  let fixture: ComponentFixture<FillingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillingdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
