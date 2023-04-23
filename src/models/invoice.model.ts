export type InvoiceListItemType = {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: InvoiceStatus;
  senderAddress: AddressType;
  clientAddress: AddressType;
  items: InvoiceItemType[];
  total: number;
};

export type InvoiceStatus = 'pending' | 'paid' | 'draft';

export type AddressType = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

export type InvoiceItemType = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};
