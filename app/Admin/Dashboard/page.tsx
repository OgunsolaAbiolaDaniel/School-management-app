'use client'
import React from 'react'
import { GrView } from "react-icons/gr";
import Firstsection from '@/components/Firstsection/Firstsection';
import Attendancetable from '@/components/Table/Attendancetable';
import Inputfield from '@/components/Inputfield/Inputfield';
import Courseform from '@/components/Courseform/Courseform';
function page() {
  return (
    <div className="flex flex-col gap-5 p-2 w-full">
      <div className="mb-6">
        <Firstsection />
      </div>
      <div className="w-full mb-6">
        <Attendancetable />
      </div>

      <div id="forms" className="flex w-full flex-col items-center md:flex">
        <div className="w-full sm:w-[95%]  bsm:w-[350px]  flex justify-center">
          <Courseform />
        </div>
      </div>
    </div>
  );
}

export default page