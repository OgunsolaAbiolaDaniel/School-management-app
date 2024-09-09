import React from 'react'
import { FaReact } from 'react-icons/fa6';
import { CiImageOn } from "react-icons/ci";
import { FcAddImage } from "react-icons/fc";

function PickImagebutton({ click }: { click: any; }) {
  return (
    <button
      title="Generate Code button"
      onClick={click}
      type="button"
      className="text-sm flex items-center bg-orange-400 px-2.5 py-1.5 rounded-lg hover:opacity-65 gap-x-0.5 text-white font-medium"
    >
      <span className="text-base">
        <CiImageOn />
      </span>
      <span>Pick Image</span>
    </button>
  );
}

export default PickImagebutton