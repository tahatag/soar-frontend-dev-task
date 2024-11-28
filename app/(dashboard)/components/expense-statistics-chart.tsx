"use client";
import { PieChart, Pie, Sector } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
  PieLabelRenderProps,
  PieSectorDataItem,
} from "recharts/types/polar/Pie";
import { ExpenseStatistic } from "@/lib/types";
import { useIsMobile } from "@/hooks/use-mobile";

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  label,
  isMobile,
}: PieLabelRenderProps & { label: string; isMobile: boolean }) => {
  const RADIAN = Math.PI / 180;
  const radius = Number(outerRadius) * 0.75;
  const x = Number(cx) + radius * Math.cos(-midAngle * RADIAN);
  const y = Number(cy) + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={isMobile ? 13 : 16}
      fontWeight={700}
    >
      {`${((percent ?? 0) * 100).toFixed(0)}%`}
      <tspan x={x} dy={15} fontSize={isMobile ? 11 : 13}>
        {label}
      </tspan>
    </text>
  );
};

export const ExpenseStatisticsChart = ({
  data,
}: {
  data: ExpenseStatistic[];
}) => {
  const chartConfig = Object.fromEntries(
    data.map((entry) => [entry.name, { ...entry }])
  ) satisfies ChartConfig;

  const [isMobile] = useIsMobile();

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square w-full max-w-[300px]"
    >
      <PieChart>
        <Pie
          data={data}
          dataKey="percentage"
          nameKey="label"
          strokeWidth={10}
          stroke="white"
          activeIndex={0}
          label={(props) =>
            renderCustomLabel({
              ...props,
              label: chartConfig[props.name as keyof typeof chartConfig].label,
              isMobile,
            })
          }
          labelLine={false}
          activeShape={({
            outerRadius = 0,
            percent,
            ...props
          }: PieSectorDataItem) => (
            <g>
              <Sector
                {...props}
                outerRadius={outerRadius + (1 / (percent ?? 10)) * 6}
              />
            </g>
          )}
          inactiveShape={({
            outerRadius = 0,
            percent,
            ...props
          }: PieSectorDataItem) => (
            <g>
              <Sector
                {...props}
                outerRadius={outerRadius + (1 / (percent ?? 0.1)) * 6}
              />
            </g>
          )}
        />
      </PieChart>
    </ChartContainer>
  );
};
