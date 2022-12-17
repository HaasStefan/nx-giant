import { inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { tapResponse } from '@ngrx/component-store';
import { exhaustMap, Observable, of, pipe } from 'rxjs';
import { Contract } from '../entities/contract.model';
import { ContractService } from '../infrastructure/contract.service';

interface State {
  contracts: Contract[];
}

@Injectable({
  providedIn: 'root',
})
export class ContractFacadeService extends ComponentStore<State> {
  private contractService = inject(ContractService);

  readonly contracts$ = this.select(({ contracts }) => contracts);

  readonly loadAllContracts = this.effect<void>(
    pipe(
      exhaustMap(() => this.contractService.getAll()),
      tapResponse((contracts) => this.patchState({ contracts }), console.error)
    )
  );

  constructor() {
    super({
      contracts: [],
    });
  }

  getContract(id: string): Observable<Contract> {
    return this.select(({ contracts }) =>
      contracts.find((c) => c.id === id)
    ).pipe(
      exhaustMap((contract) =>
        contract ? of(contract) : this.contractService.get(id)
      )
    );
  }
}
