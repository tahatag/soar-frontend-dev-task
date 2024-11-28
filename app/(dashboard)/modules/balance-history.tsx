import { dummyBalanceHistory } from "@/lib/dummyData";
import BalanceHistoryChart from "../components/balance-history-chart";

export const BalanceHistory = () => {
  return (
    <div className="mt-5 bg-white rounded-3xl h-[223px] md:h-[276px] p-5 md:p-6">
      <BalanceHistoryChart data={dummyBalanceHistory} />
    </div>
  );
};
