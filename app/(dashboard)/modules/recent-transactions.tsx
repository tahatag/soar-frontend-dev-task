import { dummyTransactions } from "@/lib/dummyData";
import { TransactionList } from "../components/transaction-list";

export const RecentTransactions = () => {
  return (
    <div className="mt-5 w-full h-[214px] md:h-[235px] rounded-3xl flex flex-col justify-between bg-white p-6">
      <TransactionList transactions={dummyTransactions} />
    </div>
  );
};
