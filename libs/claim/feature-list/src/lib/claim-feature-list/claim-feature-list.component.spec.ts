import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimFeatureListComponent } from './claim-feature-list.component';

describe('ClaimFeatureListComponent', () => {
  let component: ClaimFeatureListComponent;
  let fixture: ComponentFixture<ClaimFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimFeatureListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClaimFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
