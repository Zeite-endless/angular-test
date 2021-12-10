import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttCompanyComponent } from './att-company.component';

describe('AttCompanyComponent', () => {
  let component: AttCompanyComponent;
  let fixture: ComponentFixture<AttCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
