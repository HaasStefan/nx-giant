import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFeatureListComponent } from './customer-feature-list.component';

describe('CustomerFeatureListComponent', () => {
  let component: CustomerFeatureListComponent;
  let fixture: ComponentFixture<CustomerFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerFeatureListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
