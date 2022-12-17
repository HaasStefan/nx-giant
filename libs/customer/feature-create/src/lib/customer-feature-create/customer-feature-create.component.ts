import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from '@nx-giant/customer/ui';
import {
  Customer,
  CustomerFacadeService,
} from '@nx-giant/customer/data-access';
import { BehaviorSubject, exhaustMap, map, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import {
  CanDeactivateDialogComponent,
  TitleComponent,
} from '@nx-giant/shared/ui';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

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
  private facade = inject(CustomerFacadeService);
  private router = inject(Router);
  private dialog = inject(MatDialog);

  private disabled = new BehaviorSubject(false);
  readonly disabled$ = this.disabled.asObservable();
  private dirtyOrTouched = new BehaviorSubject(false);

  canDeactivate(): Observable<boolean> {
    return this.dirtyOrTouched.asObservable().pipe(
      map((dirtyOrTouched) => !dirtyOrTouched),
      exhaustMap((canDeactivate) =>
        !canDeactivate ? this.openDialog() : of(false)
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
    this.facade.addCustomer(customer);
    this.disabled.next(true);

    this.router.navigate(['/', 'customer', 'details', customer.id]);
  }
}
