"use client";
import {
  BarChartIcon,
  ChevronLeft,
  Disc,
  DollarSign,
  Home,
  Menu,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

export default function SideNav() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="flex ">
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 w-44 shadow-md transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:w-20 bg-black lg:bg-transparent`}
      >
        <div className="flex flex-col items-center py-6 space-y-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden"
          >
            <ChevronLeft className="h-6 w-6 " />
          </Button>
          <Button variant="ghost" size="icon">
            <Home className="h-6 w-6 " />
          </Button>
          <Button variant="ghost" size="icon">
            <Disc className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Users className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <DollarSign className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <BarChartIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <header className="p-4 lg:p-6 lg:hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(true)}
              className="mr-4"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <Link className="text-xl font-bold" href="/">
              Streamify
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
