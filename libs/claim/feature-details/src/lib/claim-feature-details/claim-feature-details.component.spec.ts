import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimFeatureDetailsComponent } from './claim-feature-details.component';

describe('ClaimFeatureDetailsComponent', () => {
  let component: ClaimFeatureDetailsComponent;
  let fixture: ComponentFixture<ClaimFeatureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimFeatureDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClaimFeatureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
