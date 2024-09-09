"use client";
import AddStudentForm from "@/components/Form/AddStudentForm";
import Datatable from "@/components/Table/Datatable";
import Tracker from "@/components/Tracker/Tracker";
import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-5 p-2 w-full">
      <div>
        <Datatable title="Students" />
      </div>
      <div className="flex flex-col w-full items-center gap-4 md:flex-row md:items-start justify-between">
        <div className="w-full flex justify-center md:w-1/2">
          <AddStudentForm />
        </div>
        <div className="w-full flex justify-center md:w-1/2">
          <Tracker label={"Student"} />
        </div>
      </div>
    </div>
  );
}

export default page;
