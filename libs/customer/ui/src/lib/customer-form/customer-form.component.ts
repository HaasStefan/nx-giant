import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '@nx-giant/customer/data-access';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import * as uuid from 'uuid';
import { distinctUntilChanged, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'nx-giant-customer-form[disabled]',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerFormComponent implements OnInit {
  @Input() set disabled(value: boolean) {
    if (value) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }
  @Output() save = new EventEmitter<Customer>();
  @Output() dirtyOrTouchedChanges = new EventEmitter<boolean>();

  private fb = inject(FormBuilder);

  dirtyOrTouchedChanges$!: Observable<boolean>;
  readonly form = this.fb.nonNullable.group({
    firstName: this.fb.control<string>('', Validators.required),
    lastName: this.fb.control<string>('', Validators.required),
    email: this.fb.control<string>('', [Validators.required, Validators.email]),
    phoneNumber: this.fb.control<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    passportNumber: this.fb.control<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    nationalIdentificationNumber: this.fb.control<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    // address: this.fb.nonNullable.group({
    //   addressLine1: this.fb.control<string>('', Validators.required),
    //   addressLine2: this.fb.control<string | null>(null),
    //   zip: this.fb.control<string>('', Validators.required),
    //   city: this.fb.control<string>('', Validators.required),
    //   country: this.fb.control<string>('', Validators.required),
    // }),
  });

  ngOnInit() {
    this.dirtyOrTouchedChanges$ = this.form.valueChanges.pipe(
      map(() => this.form.dirty || this.form.touched),
      distinctUntilChanged(),
      tap((dirty) => this.dirtyOrTouchedChanges.emit(dirty))
    );
  }

  onSubmit() {
    const customer: Customer = {
      ...this.form.getRawValue(),
      address: {
        addressLine1: 'Doe Street 1',
        zip: '666',
        city: 'Doetington',
        country: 'Doemany',
      },
      id: uuid.v4(),
    } as Customer;

    this.save.emit(customer);
  }

  get firstName() {
    return this.form.controls.firstName;
  }

  get lastName() {
    return this.form.controls.lastName;
  }

  get email() {
    return this.form.controls.email;
  }

  get phoneNumber() {
    return this.form.controls.phoneNumber;
  }

  get passportNumber() {
    return this.form.controls.passportNumber;
  }

  get nationalIdentificationNumber() {
    return this.form.controls.nationalIdentificationNumber;
  }
}
