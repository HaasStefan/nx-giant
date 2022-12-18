import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintInfoComponent } from './complaint-info.component';

describe('ComplaintInfoComponent', () => {
  let component: ComplaintInfoComponent;
  let fixture: ComponentFixture<ComplaintInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComplaintInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
