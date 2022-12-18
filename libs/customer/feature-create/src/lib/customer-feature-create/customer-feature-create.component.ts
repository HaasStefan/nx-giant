import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from '@nx-giant/customer/ui';
import {
  Customer,
  CustomerFacadeService,
} from '@nx-giant/customer/data-access';
import { BehaviorSubject, exhaustMap, map, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import {
  CanDeactivateDialogComponent,
  TitleComponent,
} from '@nx-giant/shared/ui';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NotificationFacadeService } from '@nx-giant/notification/api-customer';

@Component({
  selector: 'nx-giant-customer-feature-create',
  standalone: true,
  imports: [
    CommonModule,
    CustomerFormComponent,
    TitleComponent,
    MatDialogModule,
  ],
  templateUrl: './customer-feature-create.component.html',
  styleUrls: ['./customer-feature-create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerFeatureCreateComponent {
  private customerFacade = inject(CustomerFacadeService);
  private notificationFacade = inject(NotificationFacadeService);
  private router = inject(Router);
  private dialog = inject(MatDialog);

  private disabled = new BehaviorSubject(false);
  readonly disabled$ = this.disabled.asObservable();
  private dirtyOrTouched = new BehaviorSubject(false);

  canDeactivate(): Observable<boolean> {
    return this.dirtyOrTouched.asObservable().pipe(
      map((dirtyOrTouched) => !dirtyOrTouched),
      exhaustMap((canDeactivate) =>
        !canDeactivate ? this.openDialog() : of(true)
      )
    );
  }

  openDialog(): Observable<boolean> {
    return this.dialog.open(CanDeactivateDialogComponent).afterClosed();
  }

  onDirtyOrTouchedChanges(dirtyOrTouched: boolean) {
    console.log();
    this.dirtyOrTouched.next(dirtyOrTouched);
  }

  onSave(customer: Customer) {
    this.customerFacade.addCustomer(customer);
    this.disabled.next(true);

    this.notificationFacade.sendEmail(customer.email, 'welcome');

    this.router.navigate(['/', 'customer', 'details', customer.id]);
  }
}
