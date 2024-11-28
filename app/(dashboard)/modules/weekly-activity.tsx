import { WeeklyActivityChart } from "../components/weekly-activity-chart";

export const WeeklyActivity = () => {
  return (
    <div className="mt-5 bg-white flex flex-col justify-between rounded-3xl p-4 md:p-7 h-[254px] md:h-[322px]">
      <div className="w-full flex justify-end gap-[30px]">
        <div className="flex gap-[10px] items-center">
          <div className="w-3 h-3 rounded-full bg-secondary" />
          <p className="text-text-secondary text-xs md:text-[15px]">Deposit</p>
        </div>
        <div className="flex gap-[10px] items-center">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <p className="text-text-secondary text-xs md:text-[15px]">Withdraw</p>
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
  );
};
