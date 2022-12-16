import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractDataAccessComponent } from './contract-data-access.component';

describe('ContractDataAccessComponent', () => {
  let component: ContractDataAccessComponent;
  let fixture: ComponentFixture<ContractDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
