import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavemanageComponent } from './leave-manage.component';

describe('LeaveComponent', () => {
  let component: LeavemanageComponent;
  let fixture: ComponentFixture<LeavemanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeavemanageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeavemanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
