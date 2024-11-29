import { TransactionList } from "../components/transaction-list";
import useFetchData from "@/hooks/use-fetch-data";
import { RecentTransactionsReponse } from "@/lib/types";
import { recentTransactionsKey } from "@/lib/queryKeys";
import { Skeleton } from "@/components/ui/skeleton";

export const RecentTransactions = () => {
  const { data, isSuccess } = useFetchData<RecentTransactionsReponse>({
    url: "/recent-transactions",
    queryKey: [recentTransactionsKey],
  });

  return (
    <div className="mt-5 w-full h-[214px] md:h-[235px] rounded-3xl flex flex-col justify-between bg-white p-6">
      {isSuccess ? (
        <TransactionList transactions={data.transactions} />
      ) : (
        <div className="flex flex-col gap-2.5 pr-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              className="w-full flex justify-between items-center gap-4 overflow-hidden"
              key={index}
            >
              <div className="flex gap-4">
                <Skeleton className="h-[50px] md:h-[55px] w-[50px] md:w-[55px] rounded-full" />
                <div className="h-[50px] md:h-[55px] flex flex-col gap-1 justify-center">
                  <Skeleton className="w-24 h-6" />
                  <Skeleton className="w-12 h-4" />
                </div>
              </div>
              <Skeleton className="w-16 h-6" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
