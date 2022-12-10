import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeavetypeComponent } from './add-leavetype.component';

describe('AddLeavetypeComponent', () => {
  let component: AddLeavetypeComponent;
  let fixture: ComponentFixture<AddLeavetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLeavetypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLeavetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
