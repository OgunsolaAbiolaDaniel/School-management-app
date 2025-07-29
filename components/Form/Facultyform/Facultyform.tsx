'use client'
import React, { useState,useReducer,useEffect } from "react";
import Input from "../../Input/Input";
import Addbutton from "../../UniversalButtons/Addbutton";
import { BiSolidSchool } from "react-icons/bi";
import { useStore } from "@/app/Admin/Store/Store";
import { v4 as uuidv4 } from 'uuid';
import Departmentform from "../Departmentform/Departmentform";


function Facultyform() {
  const {storeState, storeDispatch }= useStore();
  const [facultyName, setFacultyName] = useState("");


  
  //useEffect(() => { console.log(state.faculty) }, [state.faculty]);
  function recordfacultyvalue(e:any) {
    setFacultyName(e.target.value);
  }


  function addFaculty() {
    if (facultyName.trim() !== "") {
      storeDispatch({
        type: 'ADD_FACULTY',
        payload: {
          id: uuidv4(),
          name: facultyName,
          value: facultyName,
          label: facultyName.toUpperCase(),
        }
   })
    }

    setFacultyName("");
  }
  
  
  return (
    <div className="border w-full shadow-md flex flex-col items-center rounded-lg py-2">
      <div
        className="border-b mb-4 py-2"
      >
        <div className="flex items-center justify-center gap-1  font-medium text-md px-2.5 py-3 mb-4">
          Add Faculty
          <span className="text-sm">
            <BiSolidSchool />
          </span>
        </div>
        <div className="px-4 flex flex-col gap-2 mb-3 items-center w-85%">
          <Input value={facultyName} label={"Faculty Name"} title={"Faculty name"} type={"text"} onChange={recordfacultyvalue} />
          {/*TODO  click should be changed to function && generate button for code should check in store state later*/}
          <div className="mb-2 py-1.5">
            <Addbutton text="Add Faculty" click={addFaculty} />
          </div>
        </div>
      </div>

      <div className="py-2"
      >
        <Departmentform/>
      </div>

    </div>
  );
}

export default Facultyform;