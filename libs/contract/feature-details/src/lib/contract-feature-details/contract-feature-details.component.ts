import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractDetailsComponent } from '@nx-giant/contract/ui';
import { ActivatedRoute } from '@angular/router';
import { ContractFacadeService } from '@nx-giant/contract/data-access';
import { exhaustMap, map } from 'rxjs';

@Component({
  selector: 'nx-giant-contract-feature-details',
  standalone: true,
  imports: [CommonModule, ContractDetailsComponent],
  templateUrl: './contract-feature-details.component.html',
  styleUrls: ['./contract-feature-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContractFeatureDetailsComponent {
  private activatedRoute = inject(ActivatedRoute);
  private facade = inject(ContractFacadeService);

  readonly contract$ = this.activatedRoute.params.pipe(
    map((data) => data['id']),
    exhaustMap((contractId) => this.facade.getContract(contractId))
  );
}
