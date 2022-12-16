import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimDataAccessComponent } from './claim-data-access.component';

describe('ClaimDataAccessComponent', () => {
  let component: ClaimDataAccessComponent;
  let fixture: ComponentFixture<ClaimDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClaimDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
