import BalanceHistoryChart from "../components/balance-history-chart";
import useFetchData from "@/hooks/use-fetch-data";
import { BalanceHistoryResponse } from "@/lib/types";
import { balanceHistoryKey } from "@/lib/queryKeys";

export const BalanceHistory = () => {
  const { data, isSuccess, dataUpdatedAt } =
    useFetchData<BalanceHistoryResponse>({
      url: "/balance-history",
      queryKey: [balanceHistoryKey],
    });

  return (
    <div className="mt-5 bg-white rounded-3xl h-[223px] md:h-[276px] p-5 md:p-6">
      <BalanceHistoryChart
        data={isSuccess ? data.history : []}
        key={dataUpdatedAt}
      />
    </div>
  );
};
