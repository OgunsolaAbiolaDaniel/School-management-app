
import React from 'react'
import { BiBookAdd } from "react-icons/bi";
import Input from '../Input/Input';
import Select from "react-select";
import options from './dummydata'
import {secoptions} from './dummydata'
import GenerateButton from '../UniversalButtons/GenerateButton';
import Addbutton from '../UniversalButtons/Addbutton';

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
function Courseform() {
  return (
    <div className="border shadow-md w-full rounded-lg py-2">
      <form
        action="#"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="flex items-center justify-center gap-2  font-medium text-md px-2.5 py-3 mb-4">
          Add Course
          <span>
            <BiBookAdd />
          </span>
        </div>
        <div className="px-4 flex flex-col gap-2 items-center w-85%">
          <Input label={"Course Name"} title={"course name"} type={"text"} />
          <div className="mb-2 w-full">
            <Select
              options={options}
              classNamePrefix="custom-select"
              placeholder="Faculty"
              styles={customStyles}
            />
          </div>
          <div className="w-full mb-2">
            <Select
              options={secoptions}
              classNamePrefix="custom-select"
              placeholder="Department"
              styles={customStyles}
            />
          </div>
          {/*TODO  click should be changed to function && generate button for code should check in store state later*/}
          <div className="flex justify-between w-full py-3 px-1 mb-3">
            <div className="border border-zinc-400  px-3 py-1.5 text-sm">
              #0000
            </div>
            <GenerateButton click="" title={'Code'} />
          </div>
          <div className="mb-1 py-1.5">
            <Addbutton click="" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Courseform