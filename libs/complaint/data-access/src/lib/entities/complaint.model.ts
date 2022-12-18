export interface Complaint {
  id: string;
  reason: ComplaintReason;
  contractId: string;
  customer: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
}

export type ComplaintReason = 'noRefund' | 'customerSupport';
