import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimDetailsComponent } from '@nx-giant/claim/ui';
import { TitleComponent } from '@nx-giant/shared/ui';
import { ActivatedRoute } from '@angular/router';
import { ClaimFacadeService } from '@nx-giant/claim/data-access';
import { exhaustMap, map } from 'rxjs';

@Component({
  selector: 'nx-giant-claim-feature-details',
  standalone: true,
  imports: [CommonModule, ClaimDetailsComponent, TitleComponent],
  templateUrl: './claim-feature-details.component.html',
  styleUrls: ['./claim-feature-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClaimFeatureDetailsComponent {
  private activatedRoute = inject(ActivatedRoute);
  private facade = inject(ClaimFacadeService);

  readonly claim$ = this.activatedRoute.params.pipe(
    map((data) => data['id']),
    exhaustMap((claimId) => this.facade.getClaim(claimId))
  );
}
