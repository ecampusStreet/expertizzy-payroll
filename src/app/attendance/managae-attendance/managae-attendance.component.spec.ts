import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagaeAttendanceComponent } from './managae-attendance.component';

describe('ManagaeAttendanceComponent', () => {
  let component: ManagaeAttendanceComponent;
  let fixture: ComponentFixture<ManagaeAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagaeAttendanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagaeAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
