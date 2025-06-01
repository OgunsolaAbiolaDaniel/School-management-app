

import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
/*TODO Successsfully created popup notification */
function Successfully_created({text}:{text:string}) {
  return (
      <div className='p-4 flex justify-between bg-slate-100 text-slate-600 rounded-lg shadow-md absolute bottom-2'>
      <span className='text-green-400'><FaRegCheckCircle /></span>  
      <span>{text} Successfully Created !</span>
     </div>
)
}

export default Successfully_created;