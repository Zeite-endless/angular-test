import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapniesInactiveComponent } from './comapnies-inactive.component';

describe('ComapniesInactiveComponent', () => {
  let component: ComapniesInactiveComponent;
  let fixture: ComponentFixture<ComapniesInactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComapniesInactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComapniesInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
