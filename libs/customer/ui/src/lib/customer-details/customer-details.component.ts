import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { Customer } from '@nx-giant/customer/data-access';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nx-giant-customer-details[customer]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerDetailsComponent {
  @Input() customer!: Customer;
}
