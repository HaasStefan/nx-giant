import { inject, Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { exhaustMap, pipe } from 'rxjs';
import { Complaint } from '../entities/complaint.model';
import { ComplaintService } from '../infrastructure/complaint.service';

interface State {
  complaints: Complaint[];
}

@Injectable({
  providedIn: 'root',
})
export class ComplaintFacadeService extends ComponentStore<State> {
  private complaintServcie = inject(ComplaintService);

  readonly complaints$ = this.select(({ complaints }) => complaints);

  readonly loadAllComplaints = this.effect<void>(
    pipe(
      exhaustMap(() => this.complaintServcie.getAll()),
      tapResponse((complaints) => this.patchState({ complaints }), console.log)
    )
  );

  constructor() {
    super({
      complaints: [],
    });
  }
}
