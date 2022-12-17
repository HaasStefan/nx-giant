import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimFacadeService } from '@nx-giant/claim/data-access';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '@nx-giant/shared/ui';

@Component({
  selector: 'nx-giant-claim-feature-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, RouterModule, TitleComponent],
  templateUrl: './claim-feature-list.component.html',
  styleUrls: ['./claim-feature-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClaimFeatureListComponent implements OnInit {
  private facade = inject(ClaimFacadeService);

  readonly columndefs = ['createdOn', 'damageEvent', 'firstName', 'lastName'];
  readonly claims$ = this.facade.claims$;

  ngOnInit() {
    this.facade.loadAllClaims();
  }
}
