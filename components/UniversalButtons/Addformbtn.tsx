import React from 'react'
import { IoAddOutline } from 'react-icons/io5';

function Addformbtn({ title, click }: { title: string; click:any;}) {
  return (
    <button
      title="Add button"
      onClick={click}
      type="button"
      className="text-sm flex items-center cursor-pointer bg-blue-400 px-2.5 py-1.5 rounded-md hover:opacity-65 gap-x-0.5 text-white font-medium"
    >
      <span className="text-base">
        <IoAddOutline />
      </span>
          <span>Add {title}</span>
    </button>
  );
}

export default Addformbtn