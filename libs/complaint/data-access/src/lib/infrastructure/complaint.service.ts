import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, ReplaySubject, share } from 'rxjs';
import { Complaint } from '../entities/complaint.model';

@Injectable({
  providedIn: 'root',
})
export class ComplaintService {
  private http = inject(HttpClient);

  private cache$!: Observable<Complaint[]>;

  getAll(): Observable<Complaint[]> {
    if (!this.cache$) {
      this.cache$ = this.http
        .get<Complaint[]>('/assets/complaints.json')
        .pipe(share({ connector: () => new ReplaySubject(1) }));
    }

    return this.cache$;
  }
}
