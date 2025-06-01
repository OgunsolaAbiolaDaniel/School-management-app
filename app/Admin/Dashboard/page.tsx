'use client'
import React from 'react'
import Firstsection from '@/components/Firstsection/Firstsection';
import Attendancetable from '@/components/Table/Attendancetable';
import Courseform from '@/components/Form/Courseform/Courseform';
import Facultyform from '@/components/Form/Facultyform/Facultyform';
function page() {
  return (
    <div className="flex flex-col gap-5 p-2 w-full">
      <div className="mb-6">
        <Firstsection />
      </div>
      <div className="w-full mb-6">
        <Attendancetable />
      </div>

      <div id="forms" className="flex w-full flex-col items-center md:flex-row md:justify-around md:items-start ">
        <div className="w-full sm:w-[95%]  bsm:w-[350px] mb-6 flex justify-center ">
          <Courseform />
        </div>
        <div className="w-full sm:w-[95%]  bsm:w-[350px]  flex justify-center ">
          <Facultyform />
        </div>
      </div>
    </div>
  );
}

export default page