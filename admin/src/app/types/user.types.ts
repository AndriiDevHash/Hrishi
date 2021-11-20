export type ChannelSubscription = {
  value: string;
  label: string;
  selected: boolean;
}

export type User = {
  organization: string;
  pan: string;
  gstn: string;
  address: string;
  state: string;
  mobileNumber: string;
  email: string;
  channelSubscriptions: ChannelSubscription[];
  validityPeriodFrom: string;
  validityPeriodTo: string;
  orders: string;
  sNo: string;
  invoiceId: string;
  invoiceDate: string;
  plan: string;
  description: string;
  amount: number
  status: string;
};
