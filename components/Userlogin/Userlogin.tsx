'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '@/public/assets/images/logo.png'
import { GiDialPadlock } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import { LuLogIn } from "react-icons/lu";
import { MdOutlineFacebook } from "react-icons/md";
import { FaApple } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import Loading from '../Loading/loadingpage';
function Userlogin() {
  const router = useRouter();
  const [loader, setloader] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);

  function handlelogin() {
    setloader(true);
     setTimeout(() => {
       setLoadingPage(true);
     }, 800);
    setTimeout(() => {
      router.push('/Admin/Dashboard ')
    },1500)
    }
  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <div className="flex flex-col h-full w-full">
          <header>
            <Link
              href="/"
              className="flex items-center self-start py-2 px-1 mb-10 "
            >
              <div className="object-cover w-14">
                <Image src={logo} width={500} height={400} alt="School Logo" />
              </div>
              <div className="text-[28px] font-semibold font-serif">Nexus</div>
            </Link>
          </header>

          <div className="self-center  cursor-pointer justify-self-center border rounded-xl flex flex-col py-4 justify-center sm:w-[80%] bsm:w-[60%] md:w-[45%] lg:w-[35%] xl:w-[30%] 2xl:w-[25%]">
            <div className="p-2 text-2xl bg-white rounded-md text-gray-700 shadow-lg mb-3 self-center">
              <LuLogIn />
            </div>
            <div className="flex flex-col items-center gap-2 mb-5 px-5  ">
              <h2 className="text-xl font-semibold">Sign In With email</h2>
              <p className="text-center text-gray-400 text-sm">
                Make a new doc to bring your words, data, and teams together.
                For free
              </p>
            </div>
            <form action="#" className="flex flex-col">
              <div className="mb-4 w-full mx-4">
                <label
                  htmlFor="academicId"
                  className="absolute text-xs mt-2.5 ml-3 text-slate-600"
                >
                  <FaUser />
                </label>
                <input
                  type="text"
                  placeholder="Academic Id"
                  className="bg-gray-200 px-3 pl-9 py-1.5 w-[90%] text-sm placeholder:text-sm rounded-lg outline-none"
                />
              </div>
              <div className="w-full mb-3 mx-4">
                <label
                  htmlFor="password"
                  className="absolute text-base mt-2.5 ml-3 text-slate-600"
                >
                  <GiDialPadlock />
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-gray-200 px-3 pl-9 w-[90%] py-1.5 text-sm placeholder:text-sm rounded-lg outline-none"
                />
              </div>
              <p className="text-xs mb-3.5 px-5 text-red-400 hidden">
                Incorrect details.. Please Check!!!
              </p>
              <p className="text-right text-xs mb-3.5 px-3 text-gray-600 hover:text-blue-600">
                Forgot password?
              </p>
              <button
                type="button"
                onClick={handlelogin}
                className="bg-zinc-800 border-[2px] flex justify-center items-center gap-2 border-black shadow-lg text-white rounded-lg py-1.5 mb-3 mx-3 text-sm hover:bg-zinc-700"
              >
                {loader ? (
                  <motion.div
                    className="w-4 h-4 border-[3px] border-slate-500 rounded-full bg-transparent border-t-white"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5, repeat: 2, ease: "linear" }}
                  ></motion.div>
                ) : null}
                Get Started
              </button>
              <div className="flex items-center mb-4">
                <hr className="w-1/3 border-dashed" />
                <span className="w-1/3 text-xs px-2 text-gray-600">
                  Or sign in with
                </span>
                <hr className="w-1/3 border-dashed" />
              </div>
              <div className="flex items-center gap-3 px-3 ">
                <button
                  type="button"
                  aria-label="sign in with Google"
                  className="py-1.5 px-4 w-full bg-white rounded-xl flex justify-center items-center shadow-md hover:border"
                >
                  <FcGoogle />
                </button>
                <button
                  type="button"
                  aria-label="sign in with facebook"
                  className="py-1.5 px-4 w-full bg-white rounded-xl flex justify-center items-center shadow-md text-sky-500 hover:border"
                >
                  <MdOutlineFacebook />
                </button>
                <button
                  type="button"
                  aria-label="sign in with apple"
                  className="py-1.5 px-4 w-full bg-white rounded-xl flex justify-center items-center shadow-md text-gray-800 hover:border"
                >
                  <FaApple />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Userlogin