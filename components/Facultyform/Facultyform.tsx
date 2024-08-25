'use client'
import React from "react";
import { BiBookAdd } from "react-icons/bi";
import Input from "../Input/Input";
import Addbutton from "../UniversalButtons/Addbutton";
import Select from "react-select";
import { BiSolidSchool } from "react-icons/bi";
import { ImLab } from "react-icons/im";
const options = [
  { value: "faculty", label: "Faculty" },
  { value: "School of sc and tech", label: "School Of Science and technology" },
  { value: "Sc of Arts", label: "School of Arts" },
  {
    value: "Sch of Law",
    label: "School of Law",
  },
];
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

function Facultyform() {
  return (
    <div className="border w-full shadow-md flex flex-col items-center rounded-lg py-2">
      <form
        action="#"
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className="border-b mb-4 py-2"
      >
        <div className="flex items-center justify-center gap-1  font-medium text-md px-2.5 py-3 mb-4">
          Add Faculty
          <span className="text-sm">
            <BiSolidSchool />
          </span>
        </div>
        <div className="px-4 flex flex-col gap-2 mb-3 items-center w-85%">
          <Input label={"Faculty Name"} title={"Faculty name"} type={"text"} />
          {/*TODO  click should be changed to function && generate button for code should check in store state later*/}
          <div className="mb-2 py-1.5">
            <Addbutton click="" />
          </div>
        </div>
      </form>

      <form
        action="#"
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className="py-2"
      >
        <div className="flex items-center justify-center gap-1 font-medium text-md px-2.5 py-3 mb-4">
          Add Department
          <span className="text-sm">
            <ImLab />
          </span>
        </div>
        <div className="px-4 flex flex-col mb-2 gap-2.5 items-center w-85%">
          <Input
            label={"Department Name"}
            title={"Department name"}
            type={"text"}
          />
          <div className="mb-2 w-full">
            <Select
              options={options}
              classNamePrefix="custom-select"
              placeholder="Faculty"
              styles={customStyles}
            />
          </div>
          {/*TODO  click should be changed to function && generate button for code should check in store state later*/}
          <div className="mb-1 py-1.5">
            <Addbutton click="" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Facultyform