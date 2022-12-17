import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractFacadeService } from '@nx-giant/contract/data-access';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '@nx-giant/shared/ui';

@Component({
  selector: 'nx-giant-contract-feature-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, RouterModule, TitleComponent],
  templateUrl: './contract-feature-list.component.html',
  styleUrls: ['./contract-feature-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContractFeatureListComponent implements OnInit {
  private facade = inject(ContractFacadeService);

  readonly columndefs = [
    'policyNumber',
    'createdOn',
    'insuranceStart',
    'customer',
  ];
  readonly contracts$ = this.facade.contracts$;

  ngOnInit(): void {
    this.facade.loadAllContracts();
  }
}
