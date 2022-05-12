import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerregComponent } from './managerreg.component';

describe('ManagerregComponent', () => {
  let component: ManagerregComponent;
  let fixture: ComponentFixture<ManagerregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
