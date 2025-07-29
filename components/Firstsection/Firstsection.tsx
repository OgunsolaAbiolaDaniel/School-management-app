"use client";
import React, { useActionState } from "react";
import Dashboardcard from "@/components/Dashboardcard/Dashboardcard";
import { LiaStarOfLifeSolid } from "react-icons/lia";
import { PiDiamondsFourThin } from "react-icons/pi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { SiCapacitor } from "react-icons/si";
import { useStore } from "@/app/Admin/Store/Store";


function Firstsection() {
  const { storeState, storeDispatch } = useStore();



  return (
    <div className="w-full z-10">
      <ul className="flex flex-col w-full px-2 items-center justify-between gap-3 bsm:grid bsm:grid-cols-2  bsm:gap-x-2  md:grid-cols-3 xl:grid-cols-4 md:gap-3 2xl:flex 2xl:flex-row ">
        <li className="w-full overflow-hidden rounded-lg">
          <Dashboardcard
            title={"Total Courses"}
            main={storeState.courses.length}
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
            main={storeState.student.length}
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
            main={storeState.lecturer.length}
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
            main={storeState.users.length}
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

export default Firstsection;