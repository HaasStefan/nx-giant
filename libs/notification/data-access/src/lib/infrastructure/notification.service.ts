import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EMPTY, Observable, of, ReplaySubject, share } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private http = inject(HttpClient);

  private cache$!: Observable<Notification[]>;

  getAll(): Observable<Notification[]> {
    if (!this.cache$) {
      this.cache$ = this.http
        .get<Notification[]>('/assets/notifications.json')
        .pipe(share({ connector: () => new ReplaySubject(1) }));
    }

    return this.cache$;
  }

  sendEmail(
    receiver: string,
    subject: string,
    message: string
  ): Observable<unknown> {
    console.log(
      `Sending Email: ${{
        receiver,
        subject,
        message,
      }}`
    );
    return EMPTY;
  }
}
