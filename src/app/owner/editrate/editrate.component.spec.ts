import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrateComponent } from './editrate.component';

describe('EditrateComponent', () => {
  let component: EditrateComponent;
  let fixture: ComponentFixture<EditrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
