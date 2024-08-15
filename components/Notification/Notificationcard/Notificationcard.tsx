import React from 'react'
import Image from 'next/image';
import { HiOutlineTrash } from "react-icons/hi2";

function Notificationcard({ title, message, image, alt }: { title: string; message: string; image: any;  alt:string}) {
 const minutes = new Date().getMinutes();
 const hour = new Date().getHours();
 const day = new Date().getDate();
 const month = new Date().getMonth();
 const year = new Date().getFullYear();
 const time = hour + ":" + minutes;
 const date = day + "-" + month + "-" + year;

  return (
    <div className="p-3 flex gap-2 border-b mb-0.5 items-center hover:bg-zinc-100 rounded-md">
      <div
        id="notification image"
        className="object-cover rounded-lg overflow-hidden w-[30%]"
      >
        <Image
          width={500}
          height={500}
          src={image}
          alt={alt}
        />
      </div>
      <div id="notification message" className="flex text-sm w-[70%]">
        <div>
          <h3 className="text-xs font-semibold mb-1" id="notification title">
            {title}
          </h3>
          <p className="text-xs text-gray-600">
           {message}
          </p>
          <p className="text-[10px] text-orange-500 relative top-2 left-1">
            {time}, {date}
          </p>
        </div>
        <button
          type="button"
          title="delete button"
          className="text-xs self-start cursor-pointer hover:text-red-500"
        >
          <HiOutlineTrash />
        </button>
      </div>
    </div>
  );
}

export default Notificationcard