import { User } from '../types/user.types';

export const user: User = {
  organization: 'Apple',
  pan: 'PAN string',
  gstn: 'GSTN string',
  address: 'world',
  state: 'state string',
  mobileNumber: '123456789',
  email: 'user@gmail.com',
  channelSubscriptions: [
    {
      value: 'amazon',
      label: 'Amazon',
      selected: true
    },
    {
      value: 'flipkart',
      label: 'Flipkart',
      selected: false
    },
    {
      value: 'meeshow',
      label: 'Meeshow',
      selected: true
    },
    {
      value: 'snpadeal',
      label: 'Snpadeal',
      selected: false
    },
    {
      value: 'paytm',
      label: 'Paytm',
      selected: false
    },
    {
      value: 'myntra',
      label: 'Myntra',
      selected: true
    },
    {
      value: 'shopsy',
      label: 'Shopsy',
      selected: true
    }
  ],
  validityPeriodFrom: 'Tue Nov 09 2021',
  validityPeriodTo: 'Fri Nov 26 2021',
  orders: '5',
  sNo: '152',
  invoiceId: 'id123',
  invoiceDate: 'Thu Nov 25 2021 17:05:19',
  plan: 'main plan Amazon',
  description: 'small description',
  amount: 240,
  status: 'active'
};
