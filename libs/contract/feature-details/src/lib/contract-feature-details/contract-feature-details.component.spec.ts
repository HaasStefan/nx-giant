import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractFeatureDetailsComponent } from './contract-feature-details.component';

describe('ContractFeatureDetailsComponent', () => {
  let component: ContractFeatureDetailsComponent;
  let fixture: ComponentFixture<ContractFeatureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractFeatureDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractFeatureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
