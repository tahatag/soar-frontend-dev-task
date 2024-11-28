export type CreditCard = {
  id: string | number;
  color: "black" | "white";
  balance: number;
  holder: string;
  expiryMonth: number;
  expiryYear: number;
  cardNumber: string;
  type: "mastercard";
};

export type CreditCardsResponse = {
  cards: CreditCard[];
};

export type Transaction = {
  id: string | number;
  type: "card" | "paypal" | "direct";
  message: string;
  value: number;
  date: string;
};

export type RecentTransactionsReponse = {
  transactions: Transaction[];
};

export type WeeklyTransaction = [number, number];

export type WeeklyTransactionsReponse = {
  transactions: WeeklyTransaction[];
};

export type ExpenseStatistic = {
  name: string;
  label: string;
  percentage: number;
  fill: string;
};

export type ExpenseStatisticsResponse = {
  statistics: ExpenseStatistic[];
};

export type Person = {
  id: number;
  image: string;
  name: string;
  role: string;
};

export type QuickTransferListResponse = {
  people: Person[];
};

export type BalanceHistory = {
  balance: number;
  month:
    | "Jan"
    | "Feb"
    | "Mar"
    | "Apr"
    | "May"
    | "Jun"
    | "Jul"
    | "Aug"
    | "Sep"
    | "Oct"
    | "Nov"
    | "Dec";
};

export type BalanceHistoryResponse = {
  history: BalanceHistory[];
};

export type ApiErrorResponse = {
  message: string;
};
