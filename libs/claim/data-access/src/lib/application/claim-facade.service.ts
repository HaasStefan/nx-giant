import { inject, Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { exhaustMap, Observable, of, pipe } from 'rxjs';
import { Claim } from '../entities/claim.model';
import { ClaimService } from '../infrastructure/claim.service';

interface State {
  createdClaims: Claim[];
  claims: Claim[];
}

@Injectable({
  providedIn: 'root',
})
export class ClaimFacadeService extends ComponentStore<State> {
  private claimService = inject(ClaimService);

  readonly claims$ = this.select(({ claims, createdClaims }) => [
    ...createdClaims,
    ...claims,
  ]);

  readonly loadAllClaims = this.effect<void>(
    pipe(
      exhaustMap(() => this.claimService.getAll()),
      tapResponse((claims) => this.patchState({ claims }), console.error)
    )
  );

  readonly addClaim = this.updater((state: State, claim: Claim) => ({
    ...state,
    createdClaims: [claim, ...state.createdClaims],
  }));

  constructor() {
    super({
      createdClaims: [],
      claims: [],
    });
  }

  getClaim(id: string): Observable<Claim> {
    return this.select(({ claims, createdClaims }) =>
      [...createdClaims, ...claims].find((c) => c.id === id)
    ).pipe(
      exhaustMap((claim) => (claim ? of(claim) : this.claimService.get(id)))
    );
  }
}
