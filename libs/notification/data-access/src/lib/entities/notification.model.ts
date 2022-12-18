export interface Notification {
  id: string;
  sentOn: Date;
  receiver: string;
  sender: string;
  type: 'email' | 'sms';
  subject: string;
  message: string;
  reference: {
    type: RefType;
    id: string;
  };
}

export type RefType = 'contract' | 'claim' | 'complaint' | 'customer';
