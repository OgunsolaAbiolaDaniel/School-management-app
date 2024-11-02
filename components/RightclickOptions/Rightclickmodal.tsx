import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

function Rightclickmodal({received}:{received:boolean}) {
  return (
      <div className={received ? 'bg-slate-100 rounded-md relative right-1 shadow-2xl w-40  md:right-5 ' :
          'bg-slate-100 rounded-md relative left-2 shadow-2xl w-40 md:left-5'}
      >
          <ul className='flex flex-col text-sm  overflow-hidden'> 
            <li className='py-1.5 px-4 border-b text-red-400 rounded-md flex justify-between items-center hover:bg-slate-200'><span>Delete</span><span><RiDeleteBin6Line/></span></li>  
          </ul>
    </div>
  )
}

export default Rightclickmodal