import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFacadeService } from '@nx-giant/customer/data-access';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { TitleComponent } from '@nx-giant/shared/ui';

@Component({
  selector: 'nx-giant-customer-feature-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, RouterModule, TitleComponent],
  templateUrl: './customer-feature-list.component.html',
  styleUrls: ['./customer-feature-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerFeatureListComponent implements OnInit {
  private facade = inject(CustomerFacadeService);

  readonly columndefs = ['firstName', 'lastName', 'email', 'phoneNumber'];
  readonly customers$ = this.facade.customers$;

  ngOnInit() {
    this.facade.loadAllCustomers();
  }
}
