import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationFacadeService } from '@nx-giant/notification/data-access';
import { MatTableModule } from '@angular/material/table';
import { TitleComponent } from '@nx-giant/shared/ui';

@Component({
  selector: 'nx-giant-notification-feature-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, TitleComponent],
  templateUrl: './notification-feature-list.component.html',
  styleUrls: ['./notification-feature-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationFeatureListComponent implements OnInit {
  private facade = inject(NotificationFacadeService);

  readonly columndefs = [
    'sentOn',
    'receiver',
    'sender',
    'type',
    'subject',
    'message',
  ];
  readonly notifications$ = this.facade.notifications$;

  ngOnInit() {
    this.facade.loadAllNotifications();
  }
}
