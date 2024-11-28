import { dummyExpenseStatistics } from "@/lib/dummyData";
import { ExpenseStatisticsChart } from "../components/expense-statistics-chart";

export const ExpenseStatistics = () => {
  return (
    <div className="mt-5 flex bg-white rounded-3xl h-[254px] md:h-[322px]">
      <ExpenseStatisticsChart data={dummyExpenseStatistics} />
    </div>
  );
};
