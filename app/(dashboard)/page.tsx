"use client";

import { CreditCard } from "@/components/credit-card";
import { ExpenseStatisticsChart } from "@/components/expense-statistics-chart";
import { Header } from "@/components/header";
import { TransactionList } from "@/components/transaction-list";
import { WeeklyActivityChart } from "@/components/weekly-activity-chart";
import { dummyExpenseStatistics, dummyTransactions } from "@/lib/dummyData";
import Link from "next/link";
import { QuickTransfer } from "./(modules)/quick-transfer";

export default function Dashboard() {
  return (
    <>
      <Header title="Overview" />
      <div className="w-full px-6 md:px-10 py-0 md:py-6">
        <div className="grid grid-cols-3 gap-[30px]">
          <section className="col-span-3 md:col-span-2">
            <div className="w-full flex justify-between items-center">
              <h3 className="text-text-title text-base md:text-[22px] font-semibold line-clamp-1">
                My Cards
              </h3>
              <Link
                href="/credit-cards"
                className="text-text-title hover:text-text-secondary text-sm md:text-[17px] font-semibold"
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
            <h3 className="text-text-title text-base md:text-[22px] font-semibold line-clamp-1">
              Recent Transaction
            </h3>
            <div className="mt-5 flex">
              <TransactionList transactions={dummyTransactions} />
            </div>
          </section>
        </div>
        <div className="grid grid-cols-3 gap-[30px] mt-6">
          <section className="col-span-3 md:col-span-2">
            <h3 className="text-text-title text-base md:text-[22px] font-semibold line-clamp-1">
              Weekly Activity
            </h3>
            <div className="mt-5 bg-white flex flex-col justify-between rounded-3xl p-4 md:p-7 h-[254px] md:h-[322px]">
              <div className="w-full flex justify-end gap-[30px]">
                <div className="flex gap-[10px] items-center">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <p className="text-text-secondary text-xs md:text-[15px]">
                    Deposit
                  </p>
                </div>
                <div className="flex gap-[10px] items-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <p className="text-text-secondary text-xs md:text-[15px]">
                    Withdraw
                  </p>
                </div>
              </div>
              <WeeklyActivityChart
                data={[
                  [300, 450],
                  [200, 200],
                  [200, 430],
                  [150, 350],
                  [450, 300],
                  [300, 120],
                  [150, 370],
                ]}
              />
            </div>
          </section>
          <section className="col-span-3 md:col-span-1">
            <h3 className="text-text-title text-base md:text-[22px] font-semibold line-clamp-1">
              Expense Statistics
            </h3>
            <div className="mt-5 flex bg-white rounded-3xl  h-[254px] md:h-[322px]">
              <ExpenseStatisticsChart data={dummyExpenseStatistics} />
            </div>
          </section>
        </div>
        <div className="grid grid-cols-10 gap-[30px] mt-6">
          <section className="col-span-10 md:col-span-4">
            <h3 className="text-text-title text-base md:text-[22px] font-semibold line-clamp-1">
              Quick Transfer
            </h3>
            <div className="mt-5 bg-white rounded-3xl h-[195px] md:h-[276px] p-5 md:p-6">
              <QuickTransfer />
            </div>
          </section>
          <section className="col-span-10 md:col-span-6">
            <h3 className="text-text-title text-base md:text-[22px] font-semibold line-clamp-1">
              Expense Statistics
            </h3>
          </section>
        </div>
      </div>
    </>
  );
}
