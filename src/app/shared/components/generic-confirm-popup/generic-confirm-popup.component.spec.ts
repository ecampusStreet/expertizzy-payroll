import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericConfirmPopupComponent } from './generic-confirm-popup.component';

describe('GenericConfirmPopupComponent', () => {
  let component: GenericConfirmPopupComponent;
  let fixture: ComponentFixture<GenericConfirmPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericConfirmPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericConfirmPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
