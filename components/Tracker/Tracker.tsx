import  Input  from '@/components/Input/Input';
import React from 'react'
import { MdOutlineLocationSearching } from "react-icons/md";
import SearchButton from '../UniversalButtons/SearchButton';

import Foundtable from '../Table/Foundtable';

function Tracker({ label }: { label: string; }) {
  return (
    <div className="border shadow-md w-full rounded-lg py-2 flex flex-col  overflow-x-scroll">
      <form
        action="#"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="flex items-center justify-center gap-2 underline font-medium text-md px-2.5 py-3 mb-2">
          <span>
            <MdOutlineLocationSearching />
          </span>
          Find {label}
          <span>
            <MdOutlineLocationSearching />
          </span>
        </div>

        <div className="px-4 flex flex-col gap-2 items-center w-85%">
          <Input label={`${label}[#]Id`} title={"id"} type={"number"} />

          {/*TODO  click should be changed to function && generate button for code should check in store state later*/}
          <div className="flex  justify-end w-full py-3 px-1 mb-3">
            <SearchButton click="" />
          </div>
        </div>
      </form>

   { /*TODO Display dynamic  <Foundtable />*/}
    </div>
  );
}

export default Tracker