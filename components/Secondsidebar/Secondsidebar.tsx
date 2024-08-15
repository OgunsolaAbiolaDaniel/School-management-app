'use client'
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { BsMoonStars } from 'react-icons/bs';
import { GiTeacher } from 'react-icons/gi';
import { IoChevronForwardSharp, IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { LuSunDim } from 'react-icons/lu';
import { PiStudentDuotone } from 'react-icons/pi';
import Image from 'next/image';
import logo from '@/public/assets/images/logo.png'
import { RiMenu3Line, RiUserSettingsLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';

function Secondsidebar() {
    const [opensidebar, setOpensidebar] = useState(true);
    const [theme,settheme] = useState(false)
  return (
    <motion.div
      initial={{ x: -500 }} // Sidebar starts hidden off the screen
      animate={{ x: 0 }} // Sidebar slides in when the component is rendered
      transition={{ type: "spring", stiffness: 300, damping: 30 }} // Springy animation
      className="z-20 m-1.5 hidden lg:contents"
    >
      <motion.div
        layout
        animate={{
          width: opensidebar ? "w-fit" : "w-fit", // Expand or collapse the sidebar
        }}
        transition={{ duration: 0.15, ease: opensidebar ? "linear" : "easeOut" }} // Smooth transition
        className="flex flex-col justify-between h-screen py-4 px-3 w-fit rounded-xl bg-gray-100 self-center"
      >
        <div
          className={
            opensidebar
              ? "flex flex-col justify-between"
              : "w-fit flex flex-col justify-between items-center"
          }
        >
          <header className="self-start flex items-center justify-between px-2 gap-16 mb-16">
            <div
              className={
                opensidebar
                  ? "items-center flex justify-self-start"
                  : "flex justify-self-start items-center justify-center"
              }
              onClick={() => setOpensidebar(true)}
            >
              <div className="w-12">
                <Image src={logo} alt="logo" width={500} height={500} />
              </div>
              {opensidebar ? (
                <span className="text-[18px] text-zinc-800 font-semibold tracking-wider">
                  NEXUS
                </span>
              ) : null}
            </div>
            {opensidebar && (
              <button
                title="close drawer button"
                type="button"
                onClick={() => {
                  setOpensidebar(false);
                }}
                className="justify-self-end text-[18px] text-gray-700"
              >
                <RiMenu3Line />
              </button>
            )}
          </header>

          <div
            className={
              opensidebar
                ? "justify-self-center items-center  text-zinc-600 font-semibold"
                : "justify-center w-fit"
            }
          >
            <ul
              className={
                opensidebar
                  ? "flex flex-col gap-4 items-center"
                  : "w-fit flex flex-col  gap-4 items-center"
              }
            >
              <li
                className={
                  opensidebar
                    ? "flex items-center hover:shadow-md justify-between w-full px-3 pr-2 py-2 font-mono hover:bg-gradient-to-br to-zinc-300 from-white rounded-lg active:bg-zinc-100"
                    : "flex items-center justify-center rounded-full p-2 w-fit hover:bg-gray-200"
                }
              >
                <div className="flex items-center gap-2">
                  <span
                    className={opensidebar ? "text-base text-black" : "text-lg"}
                  >
                    <RxDashboard />
                  </span>
                  {opensidebar && <span className="text-sm">Dashboard</span>}
                </div>

                {opensidebar && (
                  <span className="text-xs ">
                    <IoChevronForwardSharp />
                  </span>
                )}
              </li>

              <li
                className={
                  opensidebar
                    ? "flex items-center hover:shadow-md w-full justify-between px-3 pr-2 py-2 font-mono hover:bg-gradient-to-br to-zinc-300 from-white rounded-lg"
                    : "flex items-center justify-center rounded-full p-2.5 w-fit hover:bg-gray-200"
                }
              >
                <div className="flex items-center gap-2">
                  <span
                    className={opensidebar ? "text-base text-black" : "text-lg"}
                  >
                    <GiTeacher />
                  </span>
                  {opensidebar && <span className="text-sm">Lecturers</span>}
                </div>
                {opensidebar && (
                  <span className="text-xs">
                    <IoChevronForwardSharp />
                  </span>
                )}
              </li>
              <li
                className={
                  opensidebar
                    ? "flex items-center hover:shadow-md justify-between w-full px-3 pr-2 py-2 font-mono hover:bg-gradient-to-br to-zinc-300 from-white rounded-lg"
                    : "flex items-center justify-center rounded-full p-2.5 w-fit hover:bg-gray-200"
                }
              >
                <div className="flex items-center gap-2">
                  <span
                    className={opensidebar ? "text-base text-black" : "text-lg"}
                  >
                    <PiStudentDuotone />
                  </span>
                  {opensidebar && <span className="text-sm">Students</span>}
                </div>

                {opensidebar && (
                  <span className="text-xs">
                    <IoChevronForwardSharp />
                  </span>
                )}
              </li>
              <li
                className={
                  opensidebar
                    ? "flex items-center hover:shadow-md justify-between px-3 w-full pr-2 py-2 font-mono hover:bg-gradient-to-br to-zinc-300 from-white rounded-lg"
                    : "flex items-center justify-center rounded-full p-2.5 w-fit hover:bg-gray-200 "
                }
              >
                <div className="flex items-center gap-2">
                  <span
                    className={opensidebar ? "text-base text-black" : "text-lg"}
                  >
                    <IoChatbubbleEllipsesOutline />
                  </span>
                  {opensidebar && <span className="text-sm">Chat</span>}{" "}
                </div>

                {opensidebar && (
                  <span className="text-xs bg-yellow-500 py-1 px-2 rounded-lg">
                    4
                  </span>
                )}
              </li>
              <li
                className={
                  opensidebar
                    ? "flex items-center hover:shadow-md justify-between mt-5 w-full px-3 pr-2 py-2 font-mono hover:bg-gradient-to-br to-zinc-300 from-white rounded-lg"
                    : "flex items-center justify-center rounded-full hover:bg-gray-200 p-2.5 w-fit "
                }
              >
                <div className="flex items-center gap-2">
                  <span
                    className={opensidebar ? "text-base text-black" : "text-lg"}
                  >
                    <RiUserSettingsLine />
                  </span>
                  {opensidebar && (
                    <span className="text-sm">Account settings</span>
                  )}{" "}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <footer className="justify-self-end self-center bg-slate-200 flex w-fit  rounded-full p-0.5 ">
          {opensidebar ? (
            <>
              <button
                title="light mode"
                type="button"
                className="px-5 flex items-center gap-1.5 bg-zinc-700 py-1 rounded-full border text-xs text-white font-medium w-1/2"
              >
                <span className="text-sm">
                  <LuSunDim />
                </span>
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
            </>
          ) : (
            <button
              title="light mode"
              type="button"
              onClick={() => {
                settheme(!theme);
              }}
              className={
                theme
                  ? "p-2.5 flex items-center  bg-zinc-700 rounded-full  text-xs text-white font-medium"
                  : "p-2.5 flex items-center  bg-white rounded-full  text-xs text-zinc-700 font-medium"
              }
            >
              <span className="text-lg">
                {theme ? <LuSunDim /> : <BsMoonStars />}
              </span>
            </button>
          )}
        </footer>
      </motion.div>
    </motion.div>
  );
}

export default Secondsidebar