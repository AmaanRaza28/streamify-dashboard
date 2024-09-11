"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart with text";

const chartData = [
  {
    browser: "Subscriptions ",
    visitors: 456,
    fill: "var(--color-subscriptions)",
  },
  { browser: "Ads", visitors: 200, fill: "var(--color-ads)" },
  { browser: "Purchases", visitors: 287, fill: "var(--color-purchases)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  subscriptions: {
    label: "Subscriptions",
    color: "hsl(var(--chart-1))",
  },
  ads: {
    label: "Ads",
    color: "hsl(var(--chart-2))",
  },
  purchases: {
    label: "Purchases",
    color: "hsl(var(--chart-3))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function Revenue() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <div className="p-6 rounded-xl flex flex-col bg-[#1d1d1d] border-none text-white col-span-2 md:col-span-1 ">
      <div className="pb-0">
        <h2 className="text-xl font-normal">Total Revenue</h2>
        <p className="text-sm text-muted-foreground">
          January - September 2024
        </p>
      </div>
      <div className=" px-6">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="bg-white" hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="text-3xl font-bold fill-white"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          USD
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
      <div className=" flex items-center p-6 pt-0 flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month{" "}
          <TrendingUp className="h-5 w-5 text-green-500" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total revenue for the last 9 months
        </div>
      </div>
    </div>
  );
}
