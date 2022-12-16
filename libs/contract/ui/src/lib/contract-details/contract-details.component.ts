import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contract } from '@nx-giant/contract/data-access';

@Component({
  selector: 'nx-giant-contract-details[contract]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContractDetailsComponent {
  @Input() contract!: Contract;
}
