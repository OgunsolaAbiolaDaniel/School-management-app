import React from 'react'
import { CgSortAz } from "react-icons/cg";
import { BiEdit } from "react-icons/bi";
import Chatlist from './Chatlist';

function page() {
  return (
        <div className='flex flex-col overflow-hidden  relative'>
          <header className='justify-self-start  items-center justify-between flex px-3 py-3'>
              <div className='text-lg font-bold'>Chats</div>
              <div className='flex gap-4'>
                  <button type="button" title='new chat' className='p-2 rounded-md hover:bg-slate-100 text-gray-500 '><BiEdit/></button>
                  <button type="button" title='sort' className='p-2 rounded-md hover:bg-slate-100 text-gray-500' ><CgSortAz/></button>
              </div>
          </header>
          <div className='overflow-y-scroll h-[88vh]'>
              <ul className='mt-1 border-t scroll-px-4'>
              <li >
                  <Chatlist />
              </li>
              <li> <Chatlist/> </li>
              <li><Chatlist /></li>
              <li><Chatlist /></li>
              <li><Chatlist /></li>
              <li><Chatlist /></li>
              <li><Chatlist /></li>
                  <li><Chatlist /></li>
                  <li><Chatlist /></li>
                  <li><Chatlist /></li>
                  <li><Chatlist /></li>
                    <li><Chatlist /></li>
                  <li><Chatlist /></li>
                  <li><Chatlist /></li>
                   <li><Chatlist /></li>
              
              
          </ul>
      </div>

          
          
            
       

    </div>
  )
}

export default page