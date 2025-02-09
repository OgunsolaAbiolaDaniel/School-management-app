'use client'
import React from 'react'
import Image from 'next/image'
import { RxDashboard } from "react-icons/rx";
import { PiStudentDuotone } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { RiUserSettingsLine } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";
import { LuSunDim } from "react-icons/lu";
import { BsMoonStars } from "react-icons/bs";
import {  IoChevronForwardSharp } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import logo from '@/public/assets/images/logo.png'
import Link from 'next/link';
import {motion} from "framer-motion"
function Sidebar({ onClose, statecheck }: { onClose: any; statecheck: any }) {
  
  return (
    <motion.div
      initial={{ x: "-100%" }} // Start hidden off-screen to the left
      animate={{ x: statecheck ? "0%" : "-100%" }} // Slide in/out based on state
      transition={{ type: "spring", stiffness: 300, damping: 30 }} // Spring animation
      className="max-lg:inset-0 max-lg:bg-gray-400 max-lg:bg-opacity-40 max-lg:transition-opacity absolute z-20 lg:hidden"
    >
      <div className="flex flex-col justify-between h-screen py-4 px-3 w-fit rounded-xl bg-gray-100">
        <div className="flex flex-col justify-between ">
          <header className="self-start flex items-center justify-between px-2 gap-16 mb-16">
            <div className="items-center flex justify-self-start">
              <div className="w-12">
                <Image src={logo} alt="logo" width={500} height={500} />
              </div>

              <span className="text-[18px] text-zinc-800 font-semibold tracking-wider">
                NEXUS
              </span>
            </div>
            <button
              title="close drawer button"
              type="button"
              onClick={onClose}
              className="justify-self-end text-[18px] text-gray-700"
            >
              <RiMenu3Line />
            </button>
          </header>

          <div className="justify-self-center text-zinc-600 font-semibold">
            <ul className="flex flex-col gap-4">
             <li><Link href='./Dashboard' onClick={onClose} className="flex items-center hover:shadow-md justify-between px-3 pr-2 py-2 font-mono hover:bg-gradient-to-br to-zinc-300 from-white rounded-lg active:bg-zinc-100">
                <div className="flex items-center gap-2">
                  <span className="text-base text-black">
                    <RxDashboard />
                  </span>
                  <span className="text-sm">Dashboard</span>
                </div>

                <span className="text-xs ">
                  <IoChevronForwardSharp />
                </span>
              </Link></li> 

              <li><Link href='./Lecturers' onClick={onClose} className="flex items-center hover:shadow-md justify-between px-3 pr-2 py-2 font-mono hover:bg-gradient-to-br to-zinc-300 from-white rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-base text-black">
                    <GiTeacher />
                  </span>
                  <span className="text-sm">Lecturers</span>
                </div>

                <span className="text-xs">
                  <IoChevronForwardSharp />
                </span>
              </Link></li>
             <li><Link href='./Student' onClick={onClose} className="flex items-center hover:shadow-md justify-between px-3 pr-2 py-2 font-mono hover:bg-gradient-to-br to-zinc-300 from-white rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-base text-black">
                    <PiStudentDuotone />
                  </span>
                  <span className="text-sm">Students</span>
                </div>

                <span className="text-xs">
                  <IoChevronForwardSharp />
                </span>
              </Link></li> 
             <li> <Link href='./Chat' onClick={onClose} className="flex items-center hover:shadow-md justify-between  px-3 pr-2 py-2 font-mono hover:bg-gradient-to-br to-zinc-300 from-white rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-base text-black">
                    <IoChatbubbleEllipsesOutline />
                  </span>
                  <span className="text-sm">Chat</span>{" "}
                </div>

                <span className="text-xs bg-yellow-500 py-1 px-2 rounded-lg">
                  4
                </span>
              </Link></li>
             <li> <Link href={''} className="flex items-center hover:shadow-md justify-between mt-5 px-3 pr-2 py-2 font-mono hover:bg-gradient-to-br to-zinc-300 from-white rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-base">
                    <RiUserSettingsLine />
                  </span>
                  <span className="text-sm">Account settings</span>{" "}
                </div>
              </Link></li>
            </ul>
          </div>
        </div>

        <footer className="justify-self-end self-center bg-slate-200 flex w-fit  rounded-full p-0.5 ">
          <button
            title="light mode"
            type="button"
            className="px-5 flex items-center gap-1.5 bg-zinc-700 py-1 rounded-full border text-xs text-white font-medium w-1/2"
          >
            <span className="text-sm">
              <LuSunDim />
            </span>{" "}
            <span>Light</span>
          </button>
          <button
            title="light mode"
            type="button"
            className="px-5 flex items-center gap-1.5 py-1 rounded-full border text-xs font-medium w-1/2"
          >
            <span className="text-sm">
              <BsMoonStars />
            </span>
            <span>Dark</span>
          </button>
        </footer>
      </div>
    </motion.div>
  );
}

export default Sidebar