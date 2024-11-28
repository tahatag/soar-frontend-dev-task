import {
  BalanceHistory,
  CreditCard,
  Transaction,
  WeeklyTransaction,
} from "./types";

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
  {
    id: 4,
    type: "paypal",
    message: "Deposit Paypal",
    value: -450,
    date: "21 January 2021",
  },
  {
    id: 5,
    type: "direct",
    message: "Jemi Wilson",
    value: -2300,
    date: "20 January 2021",
  },
  {
    id: 6,
    type: "card",
    message: "Deposit from my Card",
    value: -1050,
    date: "17 January 2021",
  },
];

export const dummyWeeklyTransactions: WeeklyTransaction[] = [
  [300, 450],
  [200, 200],
  [200, 430],
  [150, 350],
  [450, 300],
  [300, 120],
  [150, 370],
];

export const dummyExpenseStatistics = [
  {
    name: "billexpense",
    label: "Bill Expense",
    percentage: 15,
    fill: "#FC7900",
  },
  {
    name: "entertainment",
    label: "Entertainment",
    percentage: 30,
    fill: "#343C6A",
  },
  {
    name: "investment",
    label: "Investment",
    percentage: 20,
    fill: "#396AFF",
  },
  {
    name: "others",
    label: "Others",
    percentage: 35,
    fill: "#232323",
  },
];

export const dummyQuickTransferPeople = [
  {
    id: 1,
    image: "/people1.jpg",
    name: "Livia Bator",
    role: "CEO",
  },
  {
    id: 2,
    image: "/people2.jpg",
    name: "Randy Press",
    role: "Director",
  },
  {
    id: 3,
    image: "/people3.jpg",
    name: "Workman",
    role: "Designer",
  },
  {
    id: 4,
    image: "/people4.jpg",
    name: "Workman",
    role: "Designer",
  },
  {
    id: 5,
    image: "/people5.jpg",
    name: "Workman",
    role: "Designer",
  },
];

export const dummyBalanceHistory: BalanceHistory[] = [
  { month: "Jul", balance: 400 },
  { month: "Aug", balance: 250 },
  { month: "Sep", balance: 450 },
  { month: "Oct", balance: 800 },
  { month: "Nov", balance: 200 },
  { month: "Dec", balance: 580 },
  { month: "Jan", balance: 650 },
];
