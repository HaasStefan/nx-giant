import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractFeatureListComponent } from './contract-feature-list.component';

describe('ContractFeatureListComponent', () => {
  let component: ContractFeatureListComponent;
  let fixture: ComponentFixture<ContractFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractFeatureListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
