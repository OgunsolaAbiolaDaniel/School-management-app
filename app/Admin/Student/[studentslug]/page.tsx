import GenerateButton from '@/components/UniversalButtons/GenerateButton'
import React from 'react'
import { PiStudentLight } from 'react-icons/pi'
import profileimage from '@/public/assets/images/profileimg.png'

import Image from 'next/image'

function page() {
    return (
        <>
         
         <div className="flex items-center font-serif justify-start gap-2 font-medium text-lg px-2.5 py-3 mb-2">
            Student Detail
          </div>
           {/*content*/}
         <div className='border shadow-sm w-full p-2 py-5 rounded-lg'>
             {/*Students Data */}
             <div className='flex flex-col w-full items-center gap-2 md:flex-row'>
         {/*Profile Image */}
           <div className="flex flex-col mb-4 px-4 w-full md:w-fit items-center self-start bsm:justify-center gap-2 bsm:flex-row bsm:gap-4 justify-between  bmd:justify-start">
              <div className="size-28 border-dashed border-2 border-blue-500 rounded-full object-contain overflow-hidden">
               <Image
                 alt="profile image preview"
                 className=""
                 src={profileimage}
                 width={500}
                 height={500}
               />
             </div>
        
    
         
            </div>
           {/*details body */}
          <div className='flex flex-col gap-2.5 w-full font-sans'>

            {/*first and last Name */}
          <div className="flex px-1 w-full gap-2 sm:gap-0 flex-wrap  justify-start ">
              
              <div className='w-full sm:w-1/2'>
                  <span className='text-base font-medium'>First Name: </span>
                  <span className='text-base font-normal'>Alioth</span>
              </div>
              {/*Last Name */}
             <div>
                  <span className='text-base font-medium'>Last Name: </span>
                  <span className='text-base font-normal'>Maxwell</span>
              </div>

         
          </div>
          

          {/*email and date of Birth */}
             <div className="flex px-1 w-full gap-2 flex-wrap bsm:flex-nowrap justify-start ">
              
              <div className='w-fit bsm:w-1/2'>
                  <span className='text-base font-medium'>Email: </span>
                  <span className='text-base font-normal'>example@email.com</span>
              </div>
              {/*Last Name */}
             <div  className='w-fit bsm:w-1/2 '>
                  <span className='text-base font-medium'>Date of Birth: </span>
                  <span className='text-base font-normal'>10-03-1999</span>
              </div>

         
                        </div>
            {/*NationLITY */}
            <div className="flex px-1 w-full gap-2 sm:gap-0 flex-wrap  justify-start ">
              <div className='w-full '>
                  <span className='text-base font-medium'>Nationality: </span>
                  <span className='text-base font-normal'>Nigeria</span>
              </div>
              {/*Last Name */}
          </div>     
          {/*Address */}
          <div className="flex px-1 w-full gap-2 sm:gap-0 flex-wrap  justify-start ">
              <div className='w-full '>
                  <span className='text-base font-medium'>Address: </span>
                  <span className='text-base font-normal'>No 6, Rua Parque, Torre da Marinha, Seixal, Portugal.</span>
              </div>
              {/*Last Name */}
                        </div>
             {/*Guardians Name  and Email*/}
             <div className="flex px-1 w-full gap-2 flex-wrap bsm:flex-nowrap justify-start ">
              
              <div className='w-fit bsm:w-1/2'>
                  <span className='text-base font-medium'>Guardian's Name: </span>
                  <span className='text-base font-normal'>Olayinka Sobowale</span>
              </div>
              {/*Last Name */}
             <div  className='w-fit bsm:w-1/2 '>
                  <span className='text-base font-medium'>Guardian's Email: </span>
                  <span className='text-base font-normal'>example@gmail.com</span>
              </div>

         
          </div>
          {/*Guardians contact and relationship */}
          <div className="flex px-1 w-full gap-2 flex-wrap bsm:flex-nowrap justify-start ">
              
              <div className='w-fit bsm:w-1/2'>
                  <span className='text-base font-medium'>Guardian's Contact: </span>
                  <span className='text-base font-normal'>+23480849581836</span>
              </div>
              {/*Last Name */}
             <div  className='w-fit bsm:w-1/2 '>
                  <span className='text-base font-medium'>Relationship: </span>
                  <span className='text-base font-normal'>Uncle</span>
              </div>

         
                        </div>
                        
        {/*Faculty and dept*/}
          <div className="flex px-1 w-full gap-2 flex-wrap bsm:flex-nowrap justify-start ">
              
              <div className='w-fit bsm:w-1/2'>
                  <span className='text-base font-medium'>Faculty: </span>
                  <span className='text-base font-normal'>School of Science and Technology</span>
              </div>
              {/*Last Name */}
             <div  className='w-fit bsm:w-1/2 '>
                  <span className='text-base font-medium'>Department: </span>
                  <span className='text-base font-normal'>Informatics</span>
              </div>

          </div>
          {/**Year and Courses offering */}
          <div className="flex px-1 w-full gap-2 flex-wrap bsm:flex-nowrap justify-start ">
              
              <div className='w-fit bsm:w-1/2'>
                  <span className='text-base font-medium'>Year:</span>
                  <span className='text-base font-normal'>Year 1</span>
              </div>
              {/*Last Name */}
             <div  className='w-fit bsm:w-1/2 '>
                  <span className='text-base font-medium'>Course Offering: </span>
                  <span className='text-base font-normal'>Math, Physics, Chemistry, Computer Science.</span>
              </div>

             </div>
                        

          {/*Academic id */}
            <div className="flex px-1 sm:px-2 w-full gap-2 flex-wrap bsm:flex-nowrap justify-start ">
              
              <div className='w-fit bsm:w-1/2'>
                  <span className='text-base font-medium'>Academic:</span>
                  <span className='text-sm font-normal text-blue-500 font-mono '> com/292/2024</span>
              </div>
              {/*Last Name */}
            
             </div>

                        

         </div>
             </div>

                 {/*TODO Id card and buttonss */}
                <div>
                    {/*TODO Id card image */}
                    <div className='flex flex-col gap-4 md:flex-row w-full items-center'>
                    {/*ID CARD FRONT-PAGE */}
                    <div></div>
                    {/*ID CARD BACK-PAGE */}
                   <div></div>
                    </div>
                    {/*download id card buttons */}
                    <div></div>
                </div>
         </div>



         </>


  )
}

export default page