export interface Claim {
  id: string;
  createdOn: Date;
  contractId: string;
  customer: Customer;
  damageEvent: DamageEvent;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export type DamageEvent = 'death' | 'accident' | 'robbery';
