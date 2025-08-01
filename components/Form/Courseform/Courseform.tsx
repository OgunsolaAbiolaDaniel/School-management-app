'use client'

import { BiBookAdd } from "react-icons/bi";
import Input from '../../Input/Input';
import Select from "react-select";
import GenerateButton from '../../UniversalButtons/GenerateButton';
import Addbutton from '../../UniversalButtons/Addbutton';
import { useState, useMemo, useEffect, useCallback } from 'react';
import {useStore } from '@/app/Admin/Store/Store';
import customStyles from '@/components/Form/customStyles'
import { FaCediSign } from "react-icons/fa6";

interface fac {
  value: string;
  label: string;
}


function Courseform() {
  const { storeState, storeDispatch } = useStore();
  const [course, setCourse] = useState("");
  const [selected_faculty, setSelected_faculty] = useState<fac>();
  
  const dept = storeState.department;
  const faculty = storeState.faculty; 

  let fac_val = selected_faculty?.value;
  
  function select_faculty(selected:any) {
    setSelected_faculty(selected);
  }

  
  const map_data_to_fac = useMemo(() => faculty?.map(v => ({ value: v.id, label: v.label })), [faculty]);

  function check({ vcheck, d_to_be_compared_with }: { vcheck: string; d_to_be_compared_with:string}) {
    vcheck === d_to_be_compared_with ? true : false;
  };

  const filteredDepartments = useMemo(() => {
  if (!fac_val) return [];
  return dept?.filter((d) => d.facultyid === fac_val)
              .map((d) => ({ value: d.id, label: d.label }));
}, [fac_val, dept]);

  let final:string;

  const generatecrscod = (fac: string) => {
    if (!fac) return null;
    const num = String(Math.floor(Math.random() * 899 + 101));
    const cd = fac?.slice(0, 3).toUpperCase();
    final = cd.concat(num);
   const check= storeState.courses.filter((d)=>{d.crscod=== final})
    console.log(final);
    return final;
  };

  let crscode;
  const finder = faculty.find(()=>{})

  
//TODO HYDRATION ERROR ON THE SELECT ;
  return (
    <div className="border shadow-md w-full rounded-lg py-2">
      <div>
        <div className="flex items-center justify-center gap-2  font-medium text-md px-2.5 py-3 mb-4">
          Add Course
          <span>
            <BiBookAdd />
          </span>
        </div>
        <div className="px-4 flex flex-col gap-2 items-center w-85%">
          <Input label={"Course Name"} title={"course name"} type={"text"} value={undefined} />
          <div className="mb-2 w-full">
            <Select
              options={map_data_to_fac}
              classNamePrefix="custom-select"
              placeholder="Faculty"
              styles={customStyles}
              onChange={select_faculty}
            />
          </div>
          <div className="w-full mb-2">
            <Select
              options={filteredDepartments}
              classNamePrefix="custom-select"
              placeholder="Select a Department"
              styles={customStyles}
            />
          </div>
          {/*TODO  click should be changed to function && generate button for code should check in store state later*/}
          <div className="flex justify-between w-full py-3 px-1 mb-3">
            <div className="border border-zinc-400  px-3 py-1.5 text-sm">
              {crscode}
            </div>
            <GenerateButton click={()=>generatecrscod("jbjb")} title={'Code'} />
          </div>
          <div className="mb-1 py-1.5">
            <Addbutton text='Add Course' click={()=>{}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courseform;