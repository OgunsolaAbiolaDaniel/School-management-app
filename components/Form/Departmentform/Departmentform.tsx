'use client'
import React from 'react'
import { useState, useReducer, useEffect,useMemo } from 'react';
import Input from '@/components/Input/Input';
import Addbutton from '@/components/UniversalButtons/Addbutton';
import Select from 'react-select';
import { ImLab } from 'react-icons/im';
import { useStore } from '@/app/Admin/Store/Store';
import { v4 as uuidv4 } from 'uuid';
import customStyles from '@/components/Form/customStyles'

interface fac {
  value: string;
  label: string;
}

function Departmentform() {
  const { storeState, storeDispatch } = useStore();
    const [selected_faculty, setSelected_faculty] = useState<fac>();
  const [department, setDepartment] = useState("");
  const faculties = storeState.faculty;
  
  const mapFacultiesDataToOption = useMemo(() => faculties.map(v => ({value: v.id, label: v.name})), [faculties])
  let val_of_selected_fac = selected_faculty?.value;

    
    function recordDeptvalue(e:any) {
    setDepartment(e.target.value);
    }
    function selectfaculty(selected:any) {
        setSelected_faculty(selected);
    }
     
    

    function addDepartment() {
        if (department.trim() !== "") {
            storeDispatch({
                type: 'ADD_DEPARTMENT',
                payload: {
                    id: uuidv4(),
                    facultyid: val_of_selected_fac,
                    name: department,
                    value: department,
                    label:department.toUpperCase,
                }
            })
        }
      setDepartment("");
      
    }


  return (
      <div>
            <div className="flex items-center justify-center gap-1 font-medium text-md px-2.5 py-3 mb-4">
          Add Department
          <span className="text-sm">
            <ImLab />
          </span>
        </div>
        <div className="px-4 flex flex-col mb-2 gap-2.5 items-center w-85%">
         <Input label={"Department Name"} title={"Department Name"} type={"text"} value={department} onChange={recordDeptvalue}/>
              <div className="mb-2 w-full">
                  
            <Select
              options={mapFacultiesDataToOption}
              classNamePrefix="custom-select"
              placeholder="Faculty"
              styles={customStyles}
               onChange={selectfaculty}
              blurInputOnSelect={true}
              closeMenuOnScroll={true}
            />
          </div>
          <div className="mb-1 py-1.5">
            <Addbutton text="Add Department" click={addDepartment} />
          </div>
        </div>
    </div>
  )
}






export default Departmentform