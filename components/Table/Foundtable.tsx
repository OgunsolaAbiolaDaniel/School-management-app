import React from 'react'
import { GrView } from "react-icons/gr";
function Foundtable() {
  return (
    <div id="table" className="w-full border overflow-x-scroll p-3 px-4">
      <table className="w-full p-4">
        <thead className="border-b py-4 px-4">
          <tr className="flex gap-4 py-3 justify-start border-b text-sm tracking-wide text-slate-600 text-opacity-80 font-semibold">
            <td className="w-1/4 px-3">First Name</td>
            <td className="w-1/4 px-3">Last Name</td>
            <td className="w-1/4 px-3">Academic Id</td>
            <td className="w-1/4 px-3">Actions</td>
          </tr>
        </thead>
        <tbody className="font-mono">
          <tr className="flex gap-4 py-3 items-center text-sm tracking-wide text-black text-opacity-80 font-medium">
            <td className="w-1/4 flex px-3">Sarah</td>
            <td className="w-1/4 px-3 flex  items-center">
              <span className="flex justify-center">Peterson</span>
            </td>
            {/*TODO id should generate with year of creation --> use Date() to solve that */}
            <td className="w-1/4 px-3 flex">LEC/2024/0987</td>
            <td className="w-1/4 px-3 flex">
              <button
                title="View action button"
                type="button"
                className="text-sm bg-slate-200 p-2 rounded-md h-fit text-blue-500"
              >
                <GrView />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Foundtable