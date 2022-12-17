import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Claim } from '@nx-giant/claim/data-access';

@Component({
  selector: 'nx-giant-claim-details[claim]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClaimDetailsComponent {
  @Input() claim!: Claim;
}
