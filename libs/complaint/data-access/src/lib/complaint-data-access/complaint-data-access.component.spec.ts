import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintDataAccessComponent } from './complaint-data-access.component';

describe('ComplaintDataAccessComponent', () => {
  let component: ComplaintDataAccessComponent;
  let fixture: ComponentFixture<ComplaintDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComplaintDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
