import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDataAccessComponent } from './shared-data-access.component';

describe('SharedDataAccessComponent', () => {
  let component: SharedDataAccessComponent;
  let fixture: ComponentFixture<SharedDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
