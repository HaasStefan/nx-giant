export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  passportNumber: string;
  nationalIdentificationNumber: string;
  address: Address;
}

export interface Address {
  addressLine1: string;
  addressLine2?: string;
  zip: string;
  city: string;
  country: string;
}
