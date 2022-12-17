import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { filter, map, Observable, ReplaySubject, share } from 'rxjs';
import { Customer } from '../entities/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private http = inject(HttpClient);

  private cache$!: Observable<Customer[]>;

  getAll(): Observable<Customer[]> {
    if (!this.cache$) {
      this.cache$ = this.http
        .get<Customer[]>('/assets/customers.json')
        .pipe(share({ connector: () => new ReplaySubject(1) }));
    }

    return this.cache$;
  }

  get(id: string): Observable<Customer> {
    return this.getAll().pipe(
      map((customers) => customers.find((c) => c.id === id)),
      filter((customer): customer is Customer => !!customer)
    );
  }
}
