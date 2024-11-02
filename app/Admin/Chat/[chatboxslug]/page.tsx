import Image from 'next/image';
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import profilepic from '@/public/assets/images/profileimg.png'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdAttach } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { AiOutlineSend } from "react-icons/ai";
import Chatbox from '@/components/Chatbox/Chatbox';

function page() {
  return (
       <div className='flex flex-col bg-slate-50 '>
      <header className='justify-self-start flex items-center justify-between pr-2 py-1 '>
        <div className='flex gap-3 items-center'>
             <button title='back button' type='button' className='p-1 rounded-md  hover:bg-slate-200'><IoIosArrowBack /></button> 
        {/* profile image*/}
        <div className='flex items-center gap-2'>
           <div className='object-cover size-9 rounded-full overflow-hidden '>
          <Image  alt='profile picture' src={profilepic} width={500} height={200}/>
          </div>
          <p className='font-semibold opacity-65 '>Abiola Ogunsola</p>
        </div>
        </div>
              {/*back for mobile */}
           
       
         
              {/*edit/setails  name   to denote that*/}
            <div className='flex items-center'>
        <button title='menu button' type='button' className='p-1 rounded-md  hover:bg-slate-200'><HiOutlineDotsHorizontal /></button> 
        
              </div>
              {/*search icon */}
       </header>
      {/*TODO 
      *SECARH WITHIN CHAT ... 
       *Back button
      * Attach File
      * Preview in chats
      * 
         
      
      
      */}

      <div className='w-full h-[70vh] flex flex-col overflow-y-scroll py-2 relative bg-logobg  bg-contain md:bg-cover   bg-center bg-opacity-100'>
        <span className='justify-self-center w-fit self-center text-[10px] inline leading-3 text-center gap-0.5  py-2 bg-slate-200 text-gray-600 rounded-lg mx-12 my-4 px-2 size-fit'>
         🔒All messages are end to end and encrypted. No one outside of this chat can  read or listen to them.
        </span>

        <ul className='flex flex-col w-full'>
          <li> <Chatbox received={false} messagebody='Hello how are you doing' sent={false} time={'10:22'} /></li>
           <li><Chatbox received={false} messagebody='Hey! What’s up?' sent={false} time={'10:22'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='Not much! Just chilling. How about you?' sent={true} time={'10:23'} /></li>
<li><Chatbox received={false} messagebody='I’m just finishing up some work.' sent={false} time={'10:24'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='Nice! Any plans for later?' sent={true} time={'10:25'} /></li>
<li><Chatbox received={false} messagebody='Thinking of going for a walk. It’s a nice day!' sent={false} time={'10:26'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='That sounds great! I might join you.' sent={true} time={'10:27'} /></li>
<li><Chatbox received={false} messagebody='Awesome! Let’s meet in 30 minutes?' sent={false} time={'10:28'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='Perfect! See you then!' sent={true} time={'10:29'} /></li>
<li><Chatbox received={false} messagebody='Looking forward to it!' sent={false} time={'10:30'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='Me too! Don’t be late!' sent={true} time={'10:31'} /></li>
<li><Chatbox received={false} messagebody='I won’t! Just wrapping up here.' sent={false} time={'10:32'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='Cool! Have you tried that new café yet?' sent={true} time={'10:33'} /></li>
<li><Chatbox received={false} messagebody='Not yet! I’ve heard good things about it.' sent={false} time={'10:34'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='We should check it out together sometime.' sent={true} time={'10:35'} /></li>
<li><Chatbox received={false} messagebody='Definitely! Maybe after our walk?' sent={false} time={'10:36'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='Sounds like a plan!' sent={true} time={'10:37'} /></li>
<li><Chatbox received={false} messagebody='What’s your favorite thing on their menu?' sent={false} time={'10:38'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='I’ve heard their pastries are amazing.' sent={true} time={'10:39'} /></li>
<li><Chatbox received={false} messagebody='I love pastries! Can’t wait to try them.' sent={false} time={'10:40'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='Same here! What else have you been up to?' sent={true} time={'10:41'} /></li>
<li><Chatbox received={false} messagebody='Just binge-watching some shows.' sent={false} time={'10:42'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='Any recommendations?' sent={true} time={'10:43'} /></li>
<li><Chatbox received={false} messagebody='Yeah! I started watching that new series about the heist.' sent={false} time={'10:44'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='Oh, I’ve heard about it! Is it good?' sent={true} time={'10:45'} /></li>
<li><Chatbox received={false} messagebody='Super engaging! I finished it in two days.' sent={false} time={'10:46'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='Wow! Sounds like I need to start it.' sent={true} time={'10:47'} /></li>
<li><Chatbox received={false} messagebody='For sure! You won’t regret it.' sent={false} time={'10:48'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='What else are you watching?' sent={true} time={'10:49'} /></li>
<li><Chatbox received={false} messagebody='I’m also watching a documentary series about space.' sent={false} time={'10:50'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='That sounds fascinating! I love space stuff.' sent={true} time={'10:51'} /></li>
<li><Chatbox received={false} messagebody='Same! It’s mind-blowing what’s out there.' sent={false} time={'10:52'} /></li>
<li className='self-end'><Chatbox received={true} messagebody="I need to check it out! What's it called?" sent={true} time={'10:53'} /></li>
<li><Chatbox received={false} messagebody='It’s called "Cosmic Wonders." Highly recommend it.' sent={false} time={'10:54'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='Thanks! I’ll add it to my list.' sent={true} time={'10:55'} /></li>
<li><Chatbox received={false} messagebody='So, how’s work going for you?' sent={false} time={'10:56'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='It’s been busy, but good! A lot of new projects.' sent={true} time={'10:57'} /></li>
<li><Chatbox received={false} messagebody='That’s great to hear! What kind of projects?' sent={false} time={'10:58'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='Mainly focused on marketing strategies right now.' sent={true} time={'10:59'} /></li>
<li><Chatbox received={false} messagebody='Sounds interesting! Are you enjoying it?' sent={false} time={'11:00'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='Yeah! It’s challenging, but rewarding.' sent={true} time={'11:01'} /></li>
<li><Chatbox received={false} messagebody='Nice! I love a good challenge.' sent={false} time={'11:02'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='Same! Keeps things exciting.' sent={true} time={'11:03'} /></li>
<li><Chatbox received={false} messagebody='What do you find the most challenging?' sent={false} time={'11:04'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='Balancing creativity with data-driven decisions.' sent={true} time={'11:05'} /></li>
<li><Chatbox received={false} messagebody='That does sound tricky! How do you manage it?' sent={false} time={'11:06'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='I try to stay open-minded and collaborate with the team.' sent={true} time={'11:07'} /></li>
<li><Chatbox received={false} messagebody='Teamwork makes the dream work!' sent={false} time={'11:08'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='Exactly! Communication is key.' sent={true} time={'11:09'} /></li>
<li><Chatbox received={false} messagebody='How’s your team dynamic?' sent={false} time={'11:10'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='Really good! We have a great rapport.' sent={true} time={'11:11'} /></li>
<li><Chatbox received={false} messagebody='That’s awesome! It makes a big difference.' sent={false} time={'11:12'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='It really does. We support each other a lot.' sent={true} time={'11:13'} /></li>
<li><Chatbox received={false} messagebody='Do you have any team-building activities coming up?' sent={false} time={'11:14'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='Yes! We’re planning a team retreat next month.' sent={false} time={'11:15'} /></li>
<li><Chatbox received={false} messagebody='That sounds fun! Where are you going?' sent={false} time={'11:16'} /></li>
<li className='self-end'><Chatbox received={true} messagebody='A cabin in the woods! Should be a nice getaway.' sent={true} time={'11:17'} /></li>
<li><Chatbox received={false} messagebody='Perfect for bonding! Any activities planned?' sent={false} time={'11:18'} /></li>

        </ul>
       
        
       
      
      </div>
      
       
          
            
          <footer className='justify-self-end justify-between w-full pr-2 border-t items-center flex pb-2'>
        <div className='flex gap-2 items-center w-[90%]  px-1 py-1.5'>
          <button title='back button' type='button' className='p-1 rounded-md  hover:bg-slate-200'><IoMdAttach /></button> 
          <label htmlFor="message" className='w-full'><input type="text" name="message" id="meaasge" title='message' className='border w-full  rounded-xl py-1.5 text-sm px-2' placeholder='Write a message...' /></label>
        </div>
        <div><button title='send' className='rounded-full p-1.5 px-2 items-baseline bg-slate-300' type="button"><AiOutlineSend/></button></div>
          </footer>

    </div>
  )
}

export default page