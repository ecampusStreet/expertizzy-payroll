import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgradeComponent } from './listgrade.component';

describe('ListgradeComponent', () => {
  let component: ListgradeComponent;
  let fixture: ComponentFixture<ListgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListgradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
