'use client'
import React, { useState } from 'react'
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import Rightclickmodal from '../RightclickOptions/Rightclickmodal';

function Chatbox({ messagebody, received, sent, time }: { messagebody: string, received: boolean, sent: boolean, time: string }) {
  const [rightclick, setRightClick] = useState(false);
  function handleClick(event: any) {
   setRightClick(!rightclick)
  }
  
  return (
    <>
    <div onClick={handleClick}   className={!received ? 'size-fit  text-xs font-sans max-w-44 bsm:w-fit sm:max-w-56  leading-3 px-2 my-1.5  relative rounded-lg pt-3 text-left text-white bg-slate-400  flex flex-col justify-start' :
      'size-fit text-xs flex-col leading-3  max-w-44 bsm:w-fit  flex font-sans px-2 text-left my-1.5  rounded-lg pt-3  text-white bg-slate-400 '
      }>
      <div className='mb-0.5 pr-1.5 leading-4'>
          {messagebody}
      </div>

      <div className='flex items-center justify-end gap-0.5'>
        <p className='text-[9px] mb-0.5 text-white'>{time}</p>
        {received? <span className={sent?'text-blue-500':'text-gray-50'}><IoCheckmarkDoneOutline /></span> :null}
       
     </div>
    
      </div>
      {rightclick?<Rightclickmodal received={received} />:null}
    </>
    
  )
}

export default Chatbox