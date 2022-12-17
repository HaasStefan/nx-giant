import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CustomerFacadeService } from '@nx-giant/customer/data-access';
import { exhaustMap, map } from 'rxjs';
import { CustomerDetailsComponent } from '@nx-giant/customer/ui';
import { TitleComponent } from '@nx-giant/shared/ui';

@Component({
  selector: 'nx-giant-customer-feature-details',
  standalone: true,
  imports: [CommonModule, CustomerDetailsComponent, TitleComponent],
  templateUrl: './customer-feature-details.component.html',
  styleUrls: ['./customer-feature-details.component.scss'],
})
export class CustomerFeatureDetailsComponent {
  private activatedRoute = inject(ActivatedRoute);
  private facade = inject(CustomerFacadeService);

  readonly customer$ = this.activatedRoute.params.pipe(
    map((data) => data['id']),
    exhaustMap((customerId) => this.facade.getCustomer(customerId))
  );
}
