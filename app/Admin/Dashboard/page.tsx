'use client'
import React from 'react'
import { GrView } from "react-icons/gr";
import Firstsection from '@/components/Firstsection/Firstsection';
import Attendancetable from '@/components/Table/Attendancetable';
function page() {
  return (
    <div className="flex flex-col p-2 w-full">
      <div className='mb-8'>
        <Firstsection/>
     </div>
      <div>
        <Attendancetable/>
     </div>

      <div id="forms"></div>

      
    </div>
  );
}

export default page


 {/*
   <table className="px-2 py-2 w-full">
     <thead className="flex flex-col">
       <tr className="flex">
         <td>Today's Attendance</td>
       </tr>
       <tr className="w-full">
         <td className="w-1/5">S/N</td>
         <td className="w-1/5">Course</td>
         <td className="w-1/5">Lecturer</td>
         <td className="w-1/5">Atttendence</td>
         <td className="w-1/5">Actions</td>
       </tr>
     </thead>
     <tbody className="overflow-x-scroll w-full">
       <tr className="w-full">
         <td className="w-1/5">1</td>
         <td className="w-1/5">Physics 101</td>
         <td className="w-1/5">Tim Peterson</td>
         <td className="w-1/5">16</td>
         <td className="w-1/5">
           <button type="button">View</button>
         </td>
       </tr>
     </tbody>
   </table>;*/
 }