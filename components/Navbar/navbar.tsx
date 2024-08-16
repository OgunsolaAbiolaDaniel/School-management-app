'use client'
import React from 'react'
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { BiBell } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from 'react';
import { LuSettings2 } from "react-icons/lu";
import Sidebar from '../Sidebar/Sidebar';
import Notification from '../Notification/Notification';
import Settings from '../Settingbox/Settings';


function Navbar() {
  const [openmenu, setOpenmenu] = useState(false);
  const [opennotification, setOpennotification] = useState(false);
  const [opensettings, setOpensettings]=useState(false);

  function opensidebar() {
    setOpenmenu(true);
    setOpensettings(false);
    setOpennotification(false);
  }
  function closesidebar() {
 setOpenmenu(false);
  }

  return (
    <>
      <div id="navbar-sidebar" className="w-full z-10">
        <div className="py-6 px-2.5 flex justify-between w-full">
          <div id="first menu" className="flex items-center gap-3 ">
            <div className="flex flex-col">
              <button
                type="button"
                title="sidebar"
                className="text-lg bg-gray-100 p-2 rounded-md  font-light text-zinc-800 bmd:hidden"
                onClick={opensidebar}
              >
                <HiOutlineMenu />
              </button>
            </div>

            <form
              action="#"
              className="flex"
              onSubmit={(event) => {
                event.preventDefault;
              }}
            >
              <button
                type="button"
                title="search bar"
                className="text-lg font-light text-zinc-600 p-1 ml-1 mt-[5px] absolute"
              >
                <FiSearch />
              </button>
              <label htmlFor="search" className="hidden"></label>
              <input
                type="search"
                name="Search bar"
                id="searchbar"
                placeholder="Search..."
                className="w-32 bg-zinc-100 rounded-md placeholder:text-xs pl-8 px-2 py-2.5 text-xs outline-none sm:w-40 bsm:w-44"
              />
            </form>
          </div>

          <div
            id="sencond menu"
            className="flex items-center justify-between gap-2"
          >
            <button
              type="button"
              title="shortcut button"
              className="text-lg bg-gray-100 p-2 rounded-md  font-light text-zinc-800 "
            >
              <LuSettings2 />
            </button>
            <button
              type="button"
              title="notification button"
              onClick={() => {
                setOpennotification(!opennotification);
                setOpenmenu(false);
                setOpensettings(false)
              }}
              className="text-lg bg-gray-100 p-2 rounded-md flex  font-light text-zinc-800 "
            >
              <span>
                <BiBell />
              </span>
              <div className="w-2 h-2 border-2 rounded-full bg-orange-500 border-white absolute ml-2 mt-[1px]"></div>
            </button>
            <button
              type="button"
              title="profile button"
              onClick={() => {
                setOpensettings(!opensettings); 
                setOpennotification(false);
                setOpenmenu(false);
              }}
              className="flex text-lg bg-gray-100 p-2 rounded-md items-center justify-center"
            >
              <IoSettingsOutline />
            </button>
          </div>
        </div>
      </div>
      {openmenu && <Sidebar onClose={closesidebar} statecheck={openmenu} />}
      {opennotification && <Notification />}
      {opensettings && <Settings />}
    </>
  );
}

export default Navbar;


