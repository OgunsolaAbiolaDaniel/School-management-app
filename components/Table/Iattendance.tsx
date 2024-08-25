'use client'
import React from 'react'
import { GrView } from "react-icons/gr";

function Iattendance() {
  return (
    <div
      id="table"
      className="w-full border overflow-x-scroll rounded-xl p-3 px-4"
    >
      <table className="w-full p-4">
        <thead className="border-b py-4 px-4">
          <tr className="py-3 border-b">
            <td className="text-[18px] font-semibold font-serif py-3 text-slate-800">
              Course Attendance
            </td>
          </tr>
          <tr className="flex gap-4 py-3 justify-start border-b text-sm tracking-wide font-mono  text-opacity-80 font-semibold">
            <td className="w-1/4 px-3 text-yellow-600">Course Name: Math 101</td>
            <td className="w-1/4 px-3 text-red-600">Lecturer: Tim Peterson</td>
            <td className="w-1/4 px-3 text-green-600">Total Attendance: 35</td>
            <td className="w-1/4 px-3 text-blue-600">Date: 12-04-2028</td>
          </tr>
          <tr className="flex gap-4 py-3 justify-start border-b text-sm tracking-wide text-slate-600 text-opacity-80 font-semibold">
            <td className="w-1/5 px-3">S/No:</td>
            <td className="w-1/5 px-3">First Name</td>
            <td className="w-1/5 px-3">Last Name</td>
            <td className="w-1/5 px-3">Matrix code</td>
            <td className="w-1/5 px-3">Actions</td>
          </tr>
        </thead>
        <tbody className='font-mono'>
          <tr className="flex gap-4 py-3 text-sm tracking-wide text-black text-opacity-80 font-medium">
            <td className="w-1/5 px-3 flex">1</td>
            <td className="w-1/5 flex px-3">Alioth</td>
            <td className="w-1/5 px-3 flex  items-center">
              <span className="flex justify-center">Peterson</span>
            </td>
            <td className="w-1/5 px-3 ">cos/124/2323</td>
            <td className="w-1/5 px-3 flex">
              <button
                title="View action button"
                type="button"
                className="text-sm bg-slate-200 p-2 rounded-md h-fit text-blue-500"
              >
                <GrView />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Iattendance