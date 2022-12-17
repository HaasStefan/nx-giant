import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '@nx-giant/customer/data-access';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import * as uuid from 'uuid';

@Component({
  selector: 'nx-giant-customer-form',
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
export class CustomerFormComponent {
  @Output() save = new EventEmitter<Customer>();

  private fb = inject(FormBuilder);

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
    address: this.fb.nonNullable.group({
      addressLine1: this.fb.control<string>('', Validators.required),
      addressLine2: this.fb.control<string | null>(null),
      zip: this.fb.control<string>('', Validators.required),
      city: this.fb.control<string>('', Validators.required),
      country: this.fb.control<string>('', Validators.required),
    }),
  });

  onSubmit() {
    const customer: Customer = {
      ...this.form.getRawValue(),
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
