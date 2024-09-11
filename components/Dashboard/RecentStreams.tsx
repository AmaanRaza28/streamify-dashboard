"use client";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

type StreamData = {
  name: string;
  artist: string;
  dateStreamed: Date;
  streamCount: number;
  userId: string;
};

type SortColumn = keyof StreamData;

interface RecentStreamProps {
  recentStreamData: {
    name: string;
    artist: string;
    dateStreamed: Date;
    streamCount: number;
    userId: string;
  }[];
}

function RecentStreams({ recentStreamData }: RecentStreamProps) {
  const [sortColumn, setSortColumn] =
    React.useState<SortColumn>("dateStreamed");
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">(
    "desc"
  );
  const [filter, setFilter] = React.useState("");

  const sortedAndFilteredData = recentStreamData
    .filter(
      (item) =>
        item.artist.toLowerCase().includes(filter.toLowerCase()) ||
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.userId.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (a[sortColumn] < b[sortColumn])
        return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn])
        return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

  const handleSort = (column: SortColumn) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <div className="bg-[#1d1d1d] p-6 rounded-xl col-span-2 md:col-span-3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">Recent Streams</h2>
        <div className="flex items-center space-x-2">
          <div className="flex items-center border-gray-500 border-[1px] rounded-3xl px-2 ">
            <Search className="h-5 w-5 text-gray-400" />
            <Input
              placeholder="search"
              className="border-none active:border-none"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-gray-400 text-sm hover:cursor-pointer">
            <th
              className="  text-left font-normal pb-2 flex items-center"
              onClick={() => handleSort("name")}
            >
              Song
              {sortDirection === "desc" && sortColumn === "name" ? (
                <ChevronDown className="h-4 w-4 inline-block ml-1" />
              ) : (
                <ChevronUp className="h-4 w-4 inline-block ml-1" />
              )}
            </th>
            <th
              className="text-left font-normal pb-2"
              onClick={() => handleSort("artist")}
            >
              Artist
              {sortDirection === "desc" && sortColumn === "artist" ? (
                <ChevronDown className="h-4 w-4 inline-block ml-1" />
              ) : (
                <ChevronUp className="h-4 w-4 inline-block ml-1" />
              )}
            </th>
            <th
              className="text-left font-normal pb-2"
              onClick={() => handleSort("dateStreamed")}
            >
              Date Streamed
              {sortDirection === "desc" && sortColumn === "dateStreamed" ? (
                <ChevronDown className="h-4 w-4 inline-block ml-1" />
              ) : (
                <ChevronUp className="h-4 w-4 inline-block ml-1" />
              )}
            </th>
            <th
              className="text-left font-normal pb-2"
              onClick={() => handleSort("streamCount")}
            >
              Streams
              {sortDirection === "desc" && sortColumn === "streamCount" ? (
                <ChevronDown className="h-4 w-4 inline-block ml-1" />
              ) : (
                <ChevronUp className="h-4 w-4 inline-block ml-1" />
              )}
            </th>
            <th className="text-right font-normal pb-2">User Id</th>
          </tr>
        </thead>
        <tbody>
          {sortedAndFilteredData.map((song, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="py-3 flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-700 mr-2 flex items-center justify-center text-xs">
                  {song.name.charAt(0)}
                </div>
                {song.name}
              </td>
              <td>
                <span className="text-gray-400">{song.artist}</span>
              </td>
              <td>
                {song.dateStreamed.getDate() +
                  " " +
                  song.dateStreamed.toLocaleString("en-US", { month: "short" })}
              </td>
              <td>{song.streamCount}</td>
              <td className="text-right">
                <span className="text-gray-400">{song.userId}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentStreams;
