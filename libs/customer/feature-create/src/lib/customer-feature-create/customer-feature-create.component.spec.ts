import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFeatureCreateComponent } from './customer-feature-create.component';

describe('CustomerFeatureCreateComponent', () => {
  let component: CustomerFeatureCreateComponent;
  let fixture: ComponentFixture<CustomerFeatureCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerFeatureCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerFeatureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
