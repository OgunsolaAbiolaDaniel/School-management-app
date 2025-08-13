import React from 'react'

import profileimage from '@/public/assets/images/profileimg.png'
import logo from '@/public/assets/images/logo.png'
import Image from 'next/image'
import qrcode from '@/public/assets/images/qrcode.svg'
import { FaDownload } from "react-icons/fa6";
import { BiSolidFilePdf } from "react-icons/bi";

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
                  <span className='text-base font-medium'>Guardian&lsquo;s Name: </span>
                  <span className='text-base font-normal'>Olayinka Sobowale</span>
              </div>
              {/*Last Name */}
             <div  className='w-fit bsm:w-1/2 '>
                  <span className='text-base font-medium'>Guardian&lsquo;s Email: </span>
                  <span className='text-base font-normal'>example@gmail.com</span>
              </div>

         
          </div>
          {/*Guardians contact and relationship */}
          <div className="flex px-1 w-full gap-2 flex-wrap bsm:flex-nowrap justify-start ">
              
              <div className='w-fit bsm:w-1/2'>
                  <span className='text-base font-medium'>Guardian&lsquo;s Contact: </span>
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
                  <span className='text-base font-medium'>Year: </span>
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
                  <span className='text-base font-medium'>Academic Id:</span>
                  <span className='text-sm font-normal text-blue-500 font-mono '> com/292/2024</span>
              </div>
              {/*Last Name */}
            
             </div>

                        

         </div>
             </div>

                 {/*TODO Id card and buttonss */}
                <div>
                    {/*TODO Id card image */}
                    <div className='flex flex-col gap-4 md:flex-row w-full items-center mt-4'>
                    {/*ID CARD FRONT-PAGE */}
                        <div className=' w-[300px] h-[510px] rounded-lg shadow-lg border bg-frontpage px-5 flex flex-col items-center py-4'>
                           
                            { /*Logo */}
                            <div className= 'flex items-center'>
                                <div className='w-14 '>
                               <Image alt='Id card' className='' src={logo} width={500} height={500}/> 
                            </div>
                                 <div className="text-[16px] tracking-wider font-semibold font-serif"><span className='text-xl'>N</span>EXUS</div>
                           </div>
                            {/*Profile pic */}                      
                            <div className="size-28 border-dashed border-[3px] border-black rounded-full object-contain overflow-hidden mt-6">
                           <Image
                            alt="profile image preview"
                             className=""
                            src={profileimage}
                             width={500}
                            height={500} />
                                
                            </div>
                            {/*Name and Tag */}
                            <div className='mt-6 flex flex-col items-center '>
                                <h2 className='font-serif text-center  font-semibold' >ABIOLA DANIEL OGUNSOLA</h2>
                                <p className='px-4 py-1 mt-2.5 text-sm flex items-center gap-1.5 font-semibold bg-black text-white rounded-full'>
                                   <span><PiStudentLight/></span>
                                    <span>STUDENT</span>
                                    <span><PiStudentLight/></span>
                                
                                </p>
                            </div>

                            {/*Qr code */}
                            <div className='mt-2 w-[160px]'>
                                 <Image alt='qrcode' src={qrcode} width={500} height={500}/>
                            </div>

                            {/*Academic Id */}
                            <div className=''>
                            <p className='text-xs from-slate-600 mt-1'>com/259/2024</p>
                            </div>
                            










                            



                        </div>




                        {/*ID CARD BACK-PAGE */}
                        <div className=' w-[300px] h-[520px]  text-black items-center px-4 py-4 flex flex-col rounded-lg shadow-lg border bg-frontpage'>
                         {/*Logo */}
                            <div className= 'flex z-20 items-center'>
                                <div className='w-14 '>
                               <Image alt='Id card' className='' src={logo} width={500} height={500}/> 
                            </div>
                           <div className="text-[16px] tracking-wider font-semibold font-serif"><span className='text-xl'>N</span>EXUS</div>
                            </div>
                            {/*Body */}
                            <div className='mt-2 z-20'>
                                <ul className='text-xs px-5  font-semibold flex flex-col gap-2 list-disc font-sans'>
                                    <li>Students must wear their ID cards visibly during school hours.</li>
                                    <li>Do not alter, deface, or misuse your ID card.</li>
                                    <li>Use your ID card for access to school facilities and events. Sharing or using another student's ID is prohibited.</li>
                                    <li>Treat your ID card as an important part of school identification. Keep it safe and in good condition.</li>
                                    <li>Ensure that your ID is worn in accordance with the school dress code policy.</li>
                                    <li>Failure to follow ID card rules may result in disciplinary measures.</li>
                                </ul>
                            </div>
                              {/*signature */}
                            <div className='flex z-20 flex-col justify-self-end gap-0.5 items-center'>
                                <hr className='border w-36 mt-24' />
                                <p className='text-xs  font-semibold'>Signature</p>
                            </div>


                        </div>
                        





                   
                    </div>











                    {/*download id card buttons */}
                    <div className='flex gap-2 justify-center flex-wrap items-center mt-7'>
                        <button className="text-sm flex items-center bg-blue-500 px-2.5 py-1.5 rounded-lg hover:opacity-65 gap-x-0.5 text-white font-medium" title='download as *pdf' type="button"><span><BiSolidFilePdf/></span>download as pdf</button>
                        <button className="text-sm flex items-center bg-blue-500 px-2.5 py-1.5 rounded-lg hover:opacity-65 gap-x-0.5 text-white font-medium" title='download as *img' type="button"><span><FaDownload/></span>download as img</button>
                    </div>
                </div>
         </div>

         </>


  )
}

export default page