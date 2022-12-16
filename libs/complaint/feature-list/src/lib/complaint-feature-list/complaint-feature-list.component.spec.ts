import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintFeatureListComponent } from './complaint-feature-list.component';

describe('ComplaintFeatureListComponent', () => {
  let component: ComplaintFeatureListComponent;
  let fixture: ComponentFixture<ComplaintFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintFeatureListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComplaintFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
