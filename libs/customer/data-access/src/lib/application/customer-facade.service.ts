import { inject, Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { exhaustMap, Observable, of, pipe } from 'rxjs';
import { Customer } from '../entities/customer.model';
import { CustomerService } from '../infrastructure/customer.service';

interface State {
  createdCustomers: Customer[];
  customers: Customer[];
}

@Injectable({
  providedIn: 'root',
})
export class CustomerFacadeService extends ComponentStore<State> {
  private customerService = inject(CustomerService);

  readonly customers$ = this.select(({ customers, createdCustomers }) => [
    ...createdCustomers,
    ...customers,
  ]);

  readonly loadAllCustomers = this.effect<void>(
    pipe(
      exhaustMap(() => this.customerService.getAll()),
      tapResponse((customers) => this.patchState({ customers }), console.error)
    )
  );

  readonly addCustomer = this.updater((state: State, customer: Customer) => ({
    ...state,
    createdCustomers: [customer, ...state.createdCustomers],
  }));

  constructor() {
    super({
      createdCustomers: [],
      customers: [],
    });
  }

  getCustomer(id: string): Observable<Customer> {
    return this.select(({ customers, createdCustomers }) =>
      [...createdCustomers, ...customers].find((c) => c.id === id)
    ).pipe(
      exhaustMap((customer) =>
        customer ? of(customer) : this.customerService.get(id)
      )
    );
  }
}
