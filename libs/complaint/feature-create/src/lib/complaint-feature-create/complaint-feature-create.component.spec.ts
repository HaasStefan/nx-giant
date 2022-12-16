import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintFeatureCreateComponent } from './complaint-feature-create.component';

describe('ComplaintFeatureCreateComponent', () => {
  let component: ComplaintFeatureCreateComponent;
  let fixture: ComponentFixture<ComplaintFeatureCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintFeatureCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComplaintFeatureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
