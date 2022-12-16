import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUtilComponent } from './shared-util.component';

describe('SharedUtilComponent', () => {
  let component: SharedUtilComponent;
  let fixture: ComponentFixture<SharedUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
