import React from 'react'

function Input({ label, title, type }: { label: string; title: string; type:string}) {
  return (
    <div className="mb-2 w-full">
      <label className="relative w-full">
        <input
          title={title.toLowerCase()}
          type={type.toLowerCase()}
          className="py-1.5 w-full transition duration-200 text-sm px-4 bg-transparent border border-gray-600 rounded-md border-opacity-50 outline-none focus:border-zinc-600 focus:border-2 "
        />
        <span className="absolute left-4 bottom-0 text-sm text-gray-900 font-medium text-opacity-50 transition duration-200 input-custom ">
          {label}
        </span>
      </label>
    </div>
  );
}

export default Input