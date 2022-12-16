import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, Observable, ReplaySubject, share } from 'rxjs';
import { Contract } from '../entities/contract.model';

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  private http = inject(HttpClient);
  private cache$!: Observable<Contract[]>;

  getAll(): Observable<Contract[]> {
    if (!this.cache$) {
      this.cache$ = this.http
        .get<Contract[]>('/assets/contracts.json')
        .pipe(share({ connector: () => new ReplaySubject(1) }));
    }

    return this.cache$;
  }

  get(id: string): Observable<Contract> {
    return this.getAll().pipe(
      map((contracts) => contracts.find((c) => c.id === id)),
      filter((contract): contract is Contract => !!contract)
    );
  }
}
