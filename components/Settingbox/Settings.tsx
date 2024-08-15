import React from 'react'
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosHelpBuoy } from "react-icons/io";
import { TiArrowSyncOutline } from "react-icons/ti";
import { MdOutlineLogout } from "react-icons/md";

function Settings() {
  return (
    <div className="flex flex-col w-[250px] absolute z-20  left-[15%] shadow-lg  sm:left-[27%] bsm:w-[330px] bsm:left-[40%] md:left-[55%] lg:left-[66%] xl:left-[72%] 2xl:left-[77%] rounded-lg px-1">
      <div>
        <div className="px-3 text-sm font-serif tracking-wider border-b py-1.5">
          <div>Settings</div>
        </div>
        <ul className="flex flex-col py-2 gap-1 text-slate-700">
          <li className="p-3 px-3 flex gap-2  items-center hover:bg-orange-500 hover:text-white rounded-lg">
            <div
              id="notification image"
              className="object-cover rounded-lg overflow-hidden text-lg "
            >
              <HiOutlineUser />
            </div>
            <div id="notification message" className="flex text-base">
              <div>
                <h3 className="text-sm font-normal" id="setting title">
                  Account
                </h3>
              </div>
            </div>
          </li>
          <li className="p-3 px-3 flex gap-2  items-center hover:bg-orange-500 hover:text-white rounded-md">
            <div
              id="notification image"
              className="object-cover rounded-lg overflow-hidden text-lg "
            >
              <IoIosHelpBuoy />
            </div>
            <div id="notification message" className="flex text-base">
              <div>
                <h3 className="text-sm font-normal" id="setting title">
                  Help & Support
                </h3>
              </div>
            </div>
          </li>
          <li className="p-3 px-3 flex gap-2 mb-2 items-center hover:bg-orange-500 hover:text-white rounded-md">
            <div
              id="notification image"
              className="object-cover rounded-lg overflow-hidden text-lg "
            >
              <TiArrowSyncOutline />
            </div>
            <div id="notification message" className="flex text-base">
              <div>
                <h3 className="text-sm font-normal" id="setting title">
                  Refresh Data
                </h3>
              </div>
            </div>
          </li>
          <li className="p-2 px-1 mx-8 flex gap-2 justify-center border  items-center hover:bg-red-400 hover:text-white rounded-xl">
            <button title="Logout button" className="flex text-base ">
              <div className="flex items-center gap-1">
                <h3 className="text-sm font-normal" id="setting title">
                  Logout
                </h3>
                <span className="text-md">
                  <MdOutlineLogout />
                </span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Settings