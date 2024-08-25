import React from 'react'
import { GrView } from 'react-icons/gr';
import Image from 'next/image';
import profileimg from '@/public/assets/images/profileimg.png'

function Attendancetable() {
  return (
    <div
      id="table"
      className="w-full border overflow-x-scroll rounded-xl p-3 px-4"
    >
      <table className="w-full p-4">
        <thead className="border-b py-4 px-4">
          <tr className="py-3 border-b">
            <td className="text-[18px] font-semibold font-serif py-3 text-slate-800">
              Today&apos;s Attendance
            </td>
          </tr>
          <tr className="flex gap-4 py-3 justify-start border-b text-sm tracking-wide text-slate-600 text-opacity-80 font-semibold">
            <td className="w-1/5 px-3">S/No:</td>
            <td className="w-1/5 px-3">Course</td>
            <td className="w-1/5 px-3">Lecturer</td>
            <td className="w-1/5 px-3">Attendance</td>
            <td className="w-1/5 px-3">Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr className="flex gap-4 py-3 text-sm tracking-wide text-black text-opacity-80 font-medium">
            <td className="w-1/5 px-3 flex">1</td>
            <td className="w-1/5 flex px-3">Math 101</td>
            <td className="w-1/5 px-3 flex flex-col items-center md:flex-row gap-1">
              <div className="w-8 items-center rounded-full overflow-hidden object-cover">
                <Image
                  width={500}
                  height={500}
                  src={profileimg}
                  alt="profile image"
                />
              </div>
              <span className="flex justify-center">Tim Peterson</span>
            </td>
            <td className="w-1/5 px-3 ">5</td>
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

export default Attendancetable;