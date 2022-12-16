import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintDomainComponent } from './complaint-domain.component';

describe('ComplaintDomainComponent', () => {
  let component: ComplaintDomainComponent;
  let fixture: ComponentFixture<ComplaintDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintDomainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComplaintDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
