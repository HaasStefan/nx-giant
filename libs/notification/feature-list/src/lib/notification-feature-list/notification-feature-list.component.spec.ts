import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationFeatureListComponent } from './notification-feature-list.component';

describe('NotificationFeatureListComponent', () => {
  let component: NotificationFeatureListComponent;
  let fixture: ComponentFixture<NotificationFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationFeatureListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
