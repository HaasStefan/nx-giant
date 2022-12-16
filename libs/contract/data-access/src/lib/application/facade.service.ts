import { inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { tapResponse } from '@ngrx/component-store';
import { exhaustMap, filter, Observable, pipe } from 'rxjs';
import { Contract } from '../entities/contract.model';
import { ContractService } from '../infrastructure/contract.service';

interface State {
  contracts: Contract[];
}

@Injectable({
  providedIn: 'root'
})
export class FacadeService extends ComponentStore<State> {
  private contractService = inject(ContractService);

  readonly contracts$ = this.select(({ contracts }) => contracts);

  readonly loadAllContracts = this.effect<void>(
    pipe(
      exhaustMap(() => this.contractService.getAll()),
      tapResponse((contracts) => this.patchState({ contracts }), console.error)
    )
  );

  readonly contract$ = (id: string) => this.select(({contracts}) => contracts.find(c => c.id === id)).pipe(
    filter((contract): contract is Contract => !!contract)
  )
  
  constructor() {
    super({
      contracts: [],
    });
  }
}
