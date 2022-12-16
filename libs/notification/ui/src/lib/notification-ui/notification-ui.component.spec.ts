import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationUiComponent } from './notification-ui.component';

describe('NotificationUiComponent', () => {
  let component: NotificationUiComponent;
  let fixture: ComponentFixture<NotificationUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
