import { ExpenseStatisticsChart } from "../components/expense-statistics-chart";
import { expenseStatisticsKey } from "@/lib/queryKeys";
import useFetchData from "@/hooks/use-fetch-data";
import { ExpenseStatisticsResponse } from "@/lib/types";

export const ExpenseStatistics = () => {
  const { data, isSuccess } = useFetchData<ExpenseStatisticsResponse>({
    url: "/expense-statistics",
    queryKey: [expenseStatisticsKey],
  });

  return (
    <div className="mt-5 flex bg-white rounded-3xl h-[254px] md:h-[322px]">
      <ExpenseStatisticsChart data={isSuccess ? data.statistics : []} />
    </div>
  );
};
