import React from "react";

import { cn, formatNumberToThousands } from "@/lib/utils";

import CardTransactionIcon from "./icons/transactions/card.svg";
import PayPalTransactionIcon from "./icons/transactions/paypal.svg";
import DirectTransactionIcon from "./icons/transactions/direct.svg";
import { Transaction } from "@/lib/types";

const transactionIcon: {
  [type in "card" | "paypal" | "direct"]: React.ReactNode;
} = {
  card: <CardTransactionIcon />,
  paypal: <PayPalTransactionIcon />,
  direct: <DirectTransactionIcon />,
};

export const TransactionList = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  return (
    <div
      className={cn(
        "w-full h-[214px] md:h-[235px] rounded-3xl flex flex-col justify-between bg-white p-6"
      )}
    >
      {transactions.map((transaction) => (
        <div
          className="w-full flex justify-between items-center gap-4 overflow-hidden"
          key={transaction.id}
        >
          <div className="flex gap-4 [&>svg]:h-[50px] md:[&>svg]:h-[55px] [&>svg]:w-[50px] md:[&>svg]:w-[55px]">
            {transactionIcon[transaction.type]}
            <div className="h-[50px] md:h-[55px] flex flex-col justify-center">
              <p className="font-medium line-clamp-1 text-sm md:text-base">
                {transaction.message}
              </p>
              <p className="text-text-secondary text-xs md:text-[15px] line-clamp-1">
                {transaction.date}
              </p>
            </div>
          </div>
          <p
            className={cn(
              "font-medium text-[11px] md:text-base",
              transaction.value < 0
                ? "text-text-negative"
                : "text-text-positive"
            )}
          >
            {transaction.value < 0 ? "-" : "+"}$
            {formatNumberToThousands(Math.abs(transaction.value))}
          </p>
        </div>
      ))}
    </div>
  );
};
