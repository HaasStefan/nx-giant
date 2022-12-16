import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractUiComponent } from './contract-ui.component';

describe('ContractUiComponent', () => {
  let component: ContractUiComponent;
  let fixture: ComponentFixture<ContractUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
