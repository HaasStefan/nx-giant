import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Claim, ClaimFacadeService } from '@nx-giant/claim/data-access';
import { map, Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'nx-giant-claim-info[contractId]',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './claim-info.component.html',
  styleUrls: ['./claim-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClaimInfoComponent implements OnInit {
  private facade = inject(ClaimFacadeService);

  @Input() set contractId(value: string) {
    this.claims$ = this.facade.claims$.pipe(
      map((claims) => claims.filter((claim) => claim.contractId === value))
    );
  }
  claims$!: Observable<Claim[]>;

  ngOnInit(): void {
    this.facade.loadAllClaims();
  }
}
