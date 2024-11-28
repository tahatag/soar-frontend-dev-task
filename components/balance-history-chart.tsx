import { BalanceHistory } from "@/lib/types";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BalanceHistoryChart = ({ data }: { data: BalanceHistory[] }) => {
  return (
    <ResponsiveContainer width="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 0,
          bottom: 0,
          left: -25,
        }}
      >
        <defs>
          <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(45, 96, 255, 0.25)" />
            <stop offset="100%" stopColor="rgba(45, 96, 255, 0)" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={({ x, y, payload }) => (
            <g>
              <line
                orientation="left"
                width="60"
                height="188"
                className="chart-tick-line"
                fill="none"
                x1={x}
                x2={x}
                y1={y - 8}
                y2={y}
              />
              <text
                x={x}
                y={y + 10}
                textAnchor="middle"
                alignmentBaseline="central"
                className="weekly-activity-tick"
              >
                {payload.value}
              </text>
            </g>
          )}
        />
        <YAxis
          dataKey="balance"
          axisLine={false}
          tickLine={false}
          tick={({ x, y, payload }) => (
            <g>
              <line
                orientation="left"
                width="60"
                height="188"
                className="chart-tick-line"
                fill="none"
                x1={x + 8}
                x2={x + 2}
                y1={y}
                y2={y}
              />
              <text
                x={x - 15}
                y={y}
                textAnchor="middle"
                alignmentBaseline="central"
                className="weekly-activity-tick"
              >
                {payload.value}
              </text>
            </g>
          )}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="balance"
          stroke="rgba(24, 20, 243, 1)"
          fill="url(#colorFill)"
          strokeWidth={3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default BalanceHistoryChart;
