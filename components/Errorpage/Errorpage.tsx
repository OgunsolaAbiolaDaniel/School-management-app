import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
export default function ErrorPage() {
  return (
    <div className="h-screen bg-gradient-to-br to-white from-gray-300 flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <Image
            className="w-20"
            src="/assets/images/logo.png"
            alt="logo of nexus"
            width={500}
            height={500}
          />
          <div className="text-2xl font-semibold font-mono tracking-[0.25em]">
            NEXUS
          </div>
              </div>
              
        <div className="leading-loose mb-6 tracking-widest flex text-gray-800 text-center font-semibold text-xl ml-6 self-center  ">
          Page not found !
        </div>
        <Link href="/" className="flex items-center underline text-gray-700 hover:text-zinc-400 font-semibold">
          <span className="text-2xl">
            <BsArrowLeftShort />
          </span>
          Back to home
        </Link>
      </div>
    </div>
  );
}