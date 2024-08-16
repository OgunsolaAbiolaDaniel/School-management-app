'use client'
import React from 'react'
import airplane from '@/public/assets/images/international.jpeg'
import Notificationcard from './Notificationcard/Notificationcard';

function Notification() {
   
  return (
    <div className="flex flex-col bg-white w-fit absolute z-30 right-3 left-3 shadow-lg sm:right-5 sm:left-5 bsm:w-[330px] bsm:left-[40%] md:left-[55%] lg:left-[65%] xl:left-[70%] 2xl:left-[75%] rounded-lg p-2 px-3 sm:w-fit">
      <div className="px-3 text-sm font-serif tracking-wider">
        <div>Notifications</div>
      </div>
      <div>
        <ul>
          <li>
            <Notificationcard
              title={"New Update"}
              message={"There a new privacy policy update"}
              image={airplane}
              alt="image of an airplane"
            />
          </li>
          <li>
            <Notificationcard
              title={"Go International"}
              message={
                "We can help you to launch your product internationally."
              }
              image={airplane}
              alt="image of an airplane"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Notification