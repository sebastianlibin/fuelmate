import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpumpComponent } from './editpump.component';

describe('EditpumpComponent', () => {
  let component: EditpumpComponent;
  let fixture: ComponentFixture<EditpumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpumpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
