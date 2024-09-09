import React from 'react'
import { TbFilterSearch } from "react-icons/tb";

function SearchButton({click}: {click: any;}) {
  return (
    <button
      title="Search button"
      onClick={click}
      type="button"
      className="text-sm flex items-center bg-blue-500 px-2.5 py-1.5 rounded-lg hover:opacity-65 gap-x-0.5 text-white font-medium"
    >
      <span className="text-base">
        <TbFilterSearch />
      </span>
      <span>Search</span>
    </button>
  );
}

export default SearchButton