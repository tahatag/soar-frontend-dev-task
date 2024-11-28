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

export type Transaction = {
  id: string | number;
  type: "card" | "paypal" | "direct";
  message: string;
  value: number;
  date: string;
};

export type WeeklyTransactions = [number, number][];

export type ExpenseStatistics = {
  name: string;
  label: string;
  percentage: number;
  fill: string;
}[];

export type People = {
  id: number;
  image: string;
  name: string;
  role: string;
}[];
