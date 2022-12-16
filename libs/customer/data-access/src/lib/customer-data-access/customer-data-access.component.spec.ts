import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDataAccessComponent } from './customer-data-access.component';

describe('CustomerDataAccessComponent', () => {
  let component: CustomerDataAccessComponent;
  let fixture: ComponentFixture<CustomerDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
