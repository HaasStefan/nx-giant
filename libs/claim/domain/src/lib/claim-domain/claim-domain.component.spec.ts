import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimDomainComponent } from './claim-domain.component';

describe('ClaimDomainComponent', () => {
  let component: ClaimDomainComponent;
  let fixture: ComponentFixture<ClaimDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimDomainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClaimDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
