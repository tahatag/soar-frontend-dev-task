"use client";

import { CreditCard } from "@/components/credit-card";
import { Header } from "@/components/header";
import { TransactionList } from "@/components/transaction-list";
import { dummyTransactions } from "@/lib/dummyData";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <Header title="Overview" />
      <div className="w-full px-6 md:px-10 py-0 md:py-6">
        <div className="grid grid-cols-3 gap-[30px]">
          <section className="col-span-3 md:col-span-2">
            <div className="w-full flex justify-between items-center">
              <h3 className="text-text-title text-[22px] font-semibold">
                My Cards
              </h3>
              <Link
                href="/credit-cards"
                className="text-text-title hover:text-text-secondary text-[17px] font-semibold"
              >
                See All
              </Link>
            </div>
            <div className="mt-5 flex gap-[30px] overflow-x-scroll md:overflow-x-hidden">
              <CreditCard
                color="black"
                balance={5756}
                holder="Eddy Cusuma"
                expiryMonth={12}
                expiryYear={24}
                cardNumber="3778 **** **** 1234"
                type="mastercard"
              />
              <CreditCard
                color="white"
                balance={5214}
                holder="Eddy Cusuma"
                expiryMonth={12}
                expiryYear={24}
                cardNumber="3778 **** **** 1234"
                type="mastercard"
              />
            </div>
          </section>
          <section className="col-span-3 md:col-span-1">
            <h3 className="text-text-title text-[22px] font-semibold">
              Recent Transaction
            </h3>
            <div className="mt-5 flex">
              <TransactionList transactions={dummyTransactions} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
