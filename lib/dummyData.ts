import { CreditCard, Transaction } from "./types";

export const dummyCards: CreditCard[] = [
  {
    id: 1,
    color: "black",
    balance: 7568.1254,
    holder: "Eddy Cusuma",
    expiryMonth: 4,
    expiryYear: 25,
    cardNumber: "5213 **** **** 1648",
    type: "mastercard",
  },
  {
    id: 2,
    color: "white",
    balance: 5214,
    holder: "Eddy Cusuma",
    expiryMonth: 12,
    expiryYear: 24,
    cardNumber: "3778 **** **** 1234",
    type: "mastercard",
  },
  {
    id: 3,
    color: "white",
    balance: 1314,
    holder: "Eddy Cusuma",
    expiryMonth: 11,
    expiryYear: 26,
    cardNumber: "9979 **** **** 5552",
    type: "mastercard",
  },
];

export const dummyTransactions: Transaction[] = [
  {
    id: 1,
    type: "card",
    message: "Deposit from my Card",
    value: -850,
    date: "28 January 2021",
  },
  {
    id: 2,
    type: "paypal",
    message: "Deposit Paypal",
    value: 2500,
    date: "25 January 2021",
  },
  {
    id: 3,
    type: "direct",
    message: "Jemi Wilson",
    value: 5400,
    date: "21 January 2021",
  },
];
