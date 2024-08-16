"use client";
import React from "react";
import Dashboardcard from "@/components/Dashboardcard/Dashboardcard";
import { LiaStarOfLifeSolid } from "react-icons/lia";
import { PiDiamondsFourThin } from "react-icons/pi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { SiCapacitor } from "react-icons/si";

function Firstsection() {
  return (
    <div className="w-full z-10">
      <ul className="flex flex-col w-full px-2 items-center justify-between gap-3 bsm:grid bsm:grid-cols-2  bsm:gap-x-2  md:grid-cols-3 xl:grid-cols-4 md:gap-3 2xl:flex 2xl:flex-row ">
        <li className="w-full overflow-hidden rounded-lg">
          <Dashboardcard
            title={"Total Courses"}
            main={"3,234"}
            icon={<LiaStarOfLifeSolid />}
            svgclass="text-purple-900"
            color="bg-purple-600"
            mainclass=""
            titleclass=""
          />
        </li>
        <li className="w-full overflow-hidden rounded-lg">
          <Dashboardcard
            title={"Total Students"}
            main={"5,234"}
            icon={<HiOutlineAcademicCap />}
            svgclass="text-amber-500 opacity-70"
            color="bg-gray-100"
            mainclass="text-purple-900"
            titleclass="text-purple-900 opacity-60"
          />
        </li>
        <li className="w-full overflow-hidden rounded-lg">
          <Dashboardcard
            title={"Total Lecturers"}
            main={"6,234"}
            icon={<PiDiamondsFourThin />}
            svgclass="text-green-500 opacity-50"
            color="bg-blue-200"
            mainclass="text-purple-900"
            titleclass="text-purple-900 opacity-60"
          />
        </li>
        <li className="w-full overflow-hidden rounded-lg">
          <Dashboardcard
            title={"Total Online"}
            main={"6,234"}
            icon={<SiCapacitor />}
            svgclass="text-red-500 opacity-60"
            color="bg-slate-100"
            mainclass="text-purple-900"
            titleclass="text-purple-900 opacity-60"
          />
        </li>
      </ul>
    </div>
  );
}

export default Firstsection