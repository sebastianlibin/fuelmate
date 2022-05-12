import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtypemasterComponent } from './cardtypemaster.component';

describe('CardtypemasterComponent', () => {
  let component: CardtypemasterComponent;
  let fixture: ComponentFixture<CardtypemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardtypemasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardtypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
