import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { filter, map, Observable, ReplaySubject, share } from 'rxjs';
import { Claim } from '../entities/claim.model';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  private http = inject(HttpClient);
  private cache$!: Observable<Claim[]>;

  getAll(): Observable<Claim[]> {
    if (!this.cache$) {
      this.cache$ = this.http
        .get<Claim[]>('/assets/claims.json')
        .pipe(share({ connector: () => new ReplaySubject(1) }));
    }

    return this.cache$;
  }

  get(id: string): Observable<Claim> {
    return this.getAll().pipe(
      map((claims) => claims.find((c) => c.id === id)),
      filter((claim): claim is Claim => !!claim)
    );
  }
}
