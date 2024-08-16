'use client'
import React from 'react'

function Dashboardcard({
  title,
  main,
  icon,
  svgclass,
  titleclass,
  color,
  mainclass,
}: {
  title: string;
  main: string;
  icon: any;
  svgclass: string;
  color: string;
  titleclass: string;
    mainclass: string;
}) {
  return (
    <div className={`rounded-xl lg:w-full w-full bsm:w-fit overflow-hidden flex ${color} shadow-md`}>
      <div className="z-10 py-2 px-6 gap-1.5 text-white flex flex-col justify-center">
        <p className={`text-sm font-medium ${titleclass}`}>{title}</p>
        <p className={`text-4xl font-semibold ${mainclass}`}>{main}</p>
      </div>

      <div
        className={`self-end text-[120px] top-9 ${svgclass} relative left-8 md:left-2 xl:left-16`}
      >
        {icon}
      </div>
    </div>
  );
}

export default Dashboardcard