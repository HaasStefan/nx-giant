import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from '@nx-giant/customer/ui';
import {
  Customer,
  CustomerFacadeService,
} from '@nx-giant/customer/data-access';
import { BehaviorSubject } from 'rxjs';

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

  private disabled = new BehaviorSubject(false);
  readonly disabled$ = this.disabled.asObservable();

  onSave(customer: Customer) {
    this.disabled.next(true);
    this.facade.addCustomer(customer);
  }
}
