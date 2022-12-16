import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimFeatureCreateComponent } from './claim-feature-create.component';

describe('ClaimFeatureCreateComponent', () => {
  let component: ClaimFeatureCreateComponent;
  let fixture: ComponentFixture<ClaimFeatureCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimFeatureCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClaimFeatureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
