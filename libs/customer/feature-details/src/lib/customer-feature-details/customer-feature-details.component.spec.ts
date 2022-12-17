import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFeatureDetailsComponent } from './customer-feature-details.component';

describe('CustomerFeatureDetailsComponent', () => {
  let component: CustomerFeatureDetailsComponent;
  let fixture: ComponentFixture<CustomerFeatureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerFeatureDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerFeatureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
