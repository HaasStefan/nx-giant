import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDataAccessComponent } from './notification-data-access.component';

describe('NotificationDataAccessComponent', () => {
  let component: NotificationDataAccessComponent;
  let fixture: ComponentFixture<NotificationDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
