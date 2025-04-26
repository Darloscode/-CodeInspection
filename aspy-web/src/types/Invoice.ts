export interface Invoice {
  number: string;
  issueDate: string;
  clientName: string;
  address: string;
  serviceName: string;
  servicePrice: number;
  subtotal: number;
  tax: number;
  total: number;
  paymentMethod: string;
  contactEmail: string;
  contactPhone: string;
}