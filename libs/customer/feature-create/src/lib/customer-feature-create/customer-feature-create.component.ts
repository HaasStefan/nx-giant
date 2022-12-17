import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from '@nx-giant/customer/ui';
import {
  Customer,
  CustomerFacadeService,
} from '@nx-giant/customer/data-access';

@Component({
  selector: 'nx-giant-customer-feature-create',
  standalone: true,
  imports: [CommonModule, CustomerFormComponent],
  templateUrl: './customer-feature-create.component.html',
  styleUrls: ['./customer-feature-create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerFeatureCreateComponent {
  private facade = inject(CustomerFacadeService);

  onSave(customer: Customer) {
    this.facade.addCustomer(customer);
  }
}
