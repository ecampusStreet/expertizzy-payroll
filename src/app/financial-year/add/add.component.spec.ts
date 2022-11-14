import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfinancialYearComponent } from './add.component';

describe('AddfinancialYearComponent', () => {
  let component: AddfinancialYearComponent;
  let fixture: ComponentFixture<AddfinancialYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddfinancialYearComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddfinancialYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
