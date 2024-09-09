import React from 'react'
import Input from '../Input/Input';
import Select from "react-select";
import {secoptions} from './dummydata'
import GenerateButton from '../UniversalButtons/GenerateButton';
import { GiTeacher } from "react-icons/gi";
import profileimg from '@/public/assets/images/profileimg.png'
import Image from 'next/image';
import PickImagebutton from '../UniversalButtons/PickImagebutton';
import Addformbtn from '../UniversalButtons/Addformbtn';



const customStyles = {
  control: (provided: any) => ({
    ...provided,
    minHeight: "30px", // Default height
    fontSize: "12px", // Default font size for selected value
  }),
  placeholder: (provided: any) => ({
    ...provided,
    fontSize: "14px", // Font size for placeholder
  }),
  singleValue: (provided: any) => ({
    ...provided,
    fontSize: "14px", // Font size for selected value
  }),
  input: (provided: any) => ({
    ...provided,
    fontSize: "14px", // Font size for input text
  }),
  option: (provided: any) => ({
    ...provided,
    fontSize: "14px", // Font size for dropdown options
  }),
  menu: (provided: any) => ({
    ...provided,
    fontSize: "14px", // Font size for menu items
  }),
};

function AddLecturerForm() {
    
  return (
         <div className="border shadow-md w-full bsm:w-fit rounded-lg py-2">
      <form
        action="#"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="flex items-center justify-center gap-2  font-medium text-md px-2.5 py-3 mb-4">
          Add Lecturer
          <span>
            <GiTeacher />
          </span>
        </div>
              <div className="px-4 flex flex-col gap-2 items-center w-85%">
                  
         <div className='flex flex-col w-full gap-2 bsm:flex-row bsm:gap-4 justify-between '>
          <Input label={"First Name"} title={"First name"} type={"text"} />
          <Input label={"Last Name"} title={"Last name"} type={"text"} />        
                  </div>
          <div className='flex flex-col w-full gap-2 bsm:flex-row bsm:gap-4 justify-between '>
          <Input label={"Email"} title={"Email"} type={"email"} />
          <Input label={"Password"} title={"Password"} type={"password"} />        
            </div>
                  
        <div className='flex flex-col w-full gap-2 bsm:flex-row self-start bsm:gap-4 justify-between '>
          <Input label={"Address"} title={"Address"} type={"text"} />      
                  </div>
                  {/*select courses */}
                  <div className='flex flex-col w-full gap-2 bsm:flex-row bsm:gap-4 justify-between '>
                      <div className='bsm:w-1/2'>
                          {/*All Faculty */}
                          <Select
                          options={secoptions}
                          classNamePrefix="custom-select"
                          placeholder="Department"
                              styles={customStyles} />
                      </div>
                      {/*TODO Fiter for all  courses in the faculty and enable multi select */}
                       <div className='bsm:w-1/2'>
                          <Select
                          options={secoptions}
                          classNamePrefix="custom-select"
                          placeholder="Courses"
                          styles={customStyles} />
                      </div>
                     

                  </div>
                  {/*Generate Id */}
                  <div className='w-full bsm:self-start'>
                     <div className="flex justify-between w-full py-3 px-1 mb-3">
                      <div className="border border-zinc-400  px-3 py-1.5 text-sm">
                     #0000
                    </div>
                  <GenerateButton click="" title={'Id'} />
                  </div>
                  </div>



                  {/*TODO Image Picker */}{/*make sur the label placeholder is hidden when there is an input  */}
                  <div className='flex self-start justify-between sm:gap-6 p-2 mb-6 '>
                      <div className='size-28 border-dashed border-2 rounded-full object-contain overflow-hidden'>
                          <Image alt="profile image preview" className='' src={profileimg} width={500} height={500}/ >
            </div>
                    <label htmlFor="filepicker" className='hidden'> <input title='filepicker' type="file" accept='.jpg,.jpeg,.png' className='hidden' /></label>
                      <div className='self-end'><PickImagebutton click={undefined}/></div>
                  </div>
                 
                  
                  




















        {/*  <div className="mb-2 w-full">
            <Select
              options={options}
                 classNamePrefix="custom-select"
                   placeholder="Faculty"
                 styles={customStyles} />
          </div>
             <div className="w-full mb-2">
                       <Select
                          options={secoptions}
                          classNamePrefix="custom-select"
                          placeholder="Department"
                          styles={customStyles}/>
          </div>
          {/*TODO  click should be changed to function && generate button for code should check in store state later
          <div className="flex justify-between w-full py-3 px-1 mb-3">
            <div className="border border-zinc-400  px-3 py-1.5 text-sm">
              #0000
            </div>
            <GenerateButton click="" />
                  </div>*/}
                  




          <div className="mb-1 py-1.5">
            <Addformbtn click="" title={'Lecturer'} />
          </div>
        </div>
      </form>
    </div>
      




  )
}

export default AddLecturerForm