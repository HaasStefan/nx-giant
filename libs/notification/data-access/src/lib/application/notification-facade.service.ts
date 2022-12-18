import { inject, Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { exhaustMap, Observable, pipe, throwError } from 'rxjs';
import { NotificationService } from '../infrastructure/notification.service';

interface State {
  notifications: Notification[];
}

@Injectable({
  providedIn: 'root',
})
export class NotificationFacadeService extends ComponentStore<State> {
  private notificationService = inject(NotificationService);

  readonly notifications$ = this.select(({ notifications }) => notifications);

  readonly loadAllNotifications = this.effect<void>(
    pipe(
      exhaustMap(() => this.notificationService.getAll()),
      tapResponse(
        (notifications) => this.patchState({ notifications }),
        console.log
      )
    )
  );

  constructor() {
    super({
      notifications: [],
    });
  }

  sendEmail(
    receiver: string,
    type: 'welcome' | 'cancellation' | 'claim'
  ): Observable<unknown> {
    switch (type) {
      case 'welcome':
        return this.sendWelcomeEmail(receiver);
      default:
        return throwError(() => new Error('unsupported email type'));
    }
  }

  private sendWelcomeEmail(receiver: string): Observable<unknown> {
    return this.notificationService.sendEmail(
      receiver,
      'Welcome',
      'Welcome to our insurance! Thanks bro.'
    );
  }
}
