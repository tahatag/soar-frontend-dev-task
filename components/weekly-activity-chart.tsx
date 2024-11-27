"use client";

import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useMemo } from "react";
import { WeeklyTransactions } from "@/lib/types";
import { useIsMobile } from "@/hooks/use-mobile";

const chartConfig = {
  deposits: {
    label: "Deposits",
    color: "hsl(var(--secondary))",
  },
  withdrawals: {
    label: "Withdrawals",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export const WeeklyActivityChart = ({ data }: { data: WeeklyTransactions }) => {
  const lastSevenDays = useMemo(() => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const today = new Date();
    const last7Days: string[] = [];

    Array.from({ length: 7 }).forEach((_, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() - (7 - index - 1));
      last7Days.push(weekdays[date.getDay()]);
    });

    return last7Days;
  }, []);

  const chartData = useMemo(() => {
    return data.map(([deposit, withdraw], index) => ({
      day: lastSevenDays[index],
      deposit,
      withdraw,
    }));
  }, [data, lastSevenDays]);

  const [isMobile, isTablet] = useIsMobile();

  return (
    <ChartContainer config={chartConfig} className="h-[226px] w-full">
      <BarChart
        data={chartData}
        barGap={isTablet ? 5 : 12}
        margin={{
          top: 10,
          right: isMobile ? 0 : -30,
          bottom: 0,
          left: -25,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={({ x, y, payload }) => (
            <text
              x={x}
              y={y + 15}
              textAnchor="middle"
              className="weekly-activity-tick"
            >
              {payload.value}
            </text>
          )}
        />
        <YAxis
          domain={[0, 500]}
          axisLine={false}
          tickLine={false}
          tickCount={6}
          tick={({ x, y, payload }) => (
            <text
              x={x - 12}
              y={y}
              textAnchor="middle"
              className="weekly-activity-tick"
            >
              {payload.value}
            </text>
          )}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Bar
          barSize={isTablet ? 7 : 15}
          dataKey="withdraw"
          fill="var(--color-withdrawals)"
          radius={9999}
        />
        <Bar
          barSize={isTablet ? 7 : 15}
          dataKey="deposit"
          fill="var(--color-deposits)"
          radius={9999}
        />
      </BarChart>
    </ChartContainer>
  );
};
