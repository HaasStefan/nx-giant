import { Customer } from './customer.model';

export interface Contract {
  id: string;
  policyNumber: string;
  customer: Customer;
  createdOn: Date;
  insuranceStart: Date;
}
