export type NavigationItem = {
  name: string,
  active: boolean
}

export type User = {
  name: string;
  role: string;
}

export type Company = {
  name: string;
  longName: string;
  label: string;
  amount: number;
  rate: number;
  rateType: string;
  color: string;
  active: boolean;
  rateAmount: number;
  marketCap: number;
  stock: number;
  roe: number;
  sales: number;
  faceValue: number;
  tradeValueDay: number;
  tradeValueMonth: number;
  openingPrice: number;
  h: number;
  l: number;
  roce: number;
  hShort: number;
  lShort: number;
  bookValue: number;
  currentShort: number;
  adsh: string;
}

export type Option = {
  value: string,
  selected: boolean;
}

export type ApiConfig = {
  URI: string
}
