'use client'
import React from 'react'
import Firstsection from '@/components/Firstsection/Firstsection';
function page() {
  return (
    <div className="flex flex-col p-2 w-full">
     <Firstsection/>

      <div id="table"></div>
      <div id="forms"></div>
    </div>
  );
}

export default page
