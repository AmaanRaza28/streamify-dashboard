"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface UsersGraphProps {
  usersData: {
    month: string;
    totalUsers: number;
    activeUsers: number;
  }[];
}

const chartConfig = {
  totalUsers: {
    label: "Total Users",
    color: "#ee8ecd",
  },
  activeUsers: {
    label: "Active Users",
    color: "#1a7ffe",
  },
} satisfies ChartConfig;

export function UsersGraph({ usersData }: UsersGraphProps) {
  return (
    <div className="bg-[#1d1d1d] p-6 rounded-xl col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">Users</h2>
        <div className="flex items-center space-x-2">
          <div className="bg-gray-700 text-xs px-3 py-1 rounded-full">
            Jan - Sep 2024
          </div>
        </div>
      </div>

      <ChartContainer config={chartConfig} className="h-72 w-full">
        <AreaChart
          accessibilityLayer
          data={usersData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <defs>
            <linearGradient id="fillTotal" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-totalUsers)"
                stopOpacity={0.2}
              />
              <stop
                offset="95%"
                stopColor="var(--color-totalUsers)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillActive" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-activeUsers)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-activeUsers)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="activeUsers"
            type="natural"
            fill="url(#fillActive)"
            fillOpacity={0.4}
            stroke="var(--color-activeUsers)"
            stackId="a"
          />
          <Area
            dataKey="totalUsers"
            type="natural"
            fill="url(#fillTotal)"
            fillOpacity={0.4}
            stroke="var(--color-totalUsers)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
