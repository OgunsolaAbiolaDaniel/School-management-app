import React from 'react'
import { FaReact } from "react-icons/fa";
function GenerateButton({click}:{click:any}) {
  return (
    <button
      title="Generate Code button"
      onClick={click}
      type="button"
      className="text-sm flex items-center bg-blue-500 px-2.5 py-1.5 rounded-lg hover:opacity-65 gap-x-0.5 text-white font-medium"
    >
      <span className='text-base'>
        <FaReact />
      </span>
      <span>Generate Code</span>
    </button>
  );
}

export default GenerateButton;