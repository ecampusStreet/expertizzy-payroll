import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarmenulistComponent } from './sidebarmenulist.component';

describe('SidebarmenulistComponent', () => {
  let component: SidebarmenulistComponent;
  let fixture: ComponentFixture<SidebarmenulistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarmenulistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarmenulistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
