import React from 'react'
import Image from 'next/image'
import profileimg from '@/public/assets/images/profileimg.png'

{/* TODO Make dynamic depending on chatter */}
function Chatlist() {
    return (
      
      <div className='flex gap-3.5 border-b hover:bg-slate-100 items-center px-5 py-2 cursor-pointer'>
          {/*profile image */}
          <div className='rounded-full overflow-hidden size-12'>
              <Image src={profileimg} className='object-cover'  width={500} height={500} alt='profile pic'/>
          </div>
          {/*text */}
          <div className='flex mt-1.5 flex-col'>
              {/* TODO set active class to red or blue */}
              <h3 className='text-sm font-bold'>Abiola Daniel</h3>  
              {/*TODO ELIPSES OVERFLOW HIDDEN WHEN TEXt IS TO LONG */}
              <p className='text-xs mt-1.5'>hey i was just checking..</p>
          </div>

    </div>
  )
}

export default Chatlist