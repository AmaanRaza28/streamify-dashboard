"use client";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

interface TopSongsProps {
  topSongsData: { song: string; streams: number }[];
}
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function TopSongs({ topSongsData }: TopSongsProps) {
  return (
    <div className="bg-[#1d1d1d] p-6 rounded-xl col-span-2 lg:col-span-1">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">Top Streamed Songs</h2>
      </div>
      <ChartContainer config={chartConfig} className="w-full h-[200px]">
        <BarChart accessibilityLayer data={topSongsData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="song"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent className="bg-white" hideLabel />}
          />
          <Bar dataKey="streams" fill="#3B82F6" radius={8} />
        </BarChart>
      </ChartContainer>

      <div className="flex justify-between mt-4">
        <div>
          <div className="text-2xl font-bold">15234</div>
          <div className="text-xs text-gray-400">Total Streams</div>
        </div>
        <div>
          <div className="text-2xl font-bold">
            {topSongsData.reduce((sum, song) => {
              return sum + song.streams;
            }, 0)}
          </div>
          <div className="text-xs text-gray-400">This Month</div>
        </div>
      </div>
    </div>
  );
}
