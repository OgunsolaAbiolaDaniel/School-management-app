'use client'
import { createContext, ReactNode, useReducer } from "react";
import AllcontextI from "./storeInterface";
import { dummyData } from "./dummydata";

export const Allcontext: AllcontextI = {
    users: [],
    student: [],
    lecturer: [],
    courses: [],
    faculty: [],
    department: []
}



export function storeReducer(state: AllcontextI, action:{ type: string; payload?:any}):AllcontextI {
   switch (action.type) {
          case 'ADD_USER':
          return {
               ...state,
               users:[...state.users,action.payload]
           }
       case 'ADD_STUDENT':
           return {
               ...state,
               student:[...state.student,action.payload]
           }
    
       case 'ADD_LECTURER':
           return {
               ...state,
               lecturer:[...state.lecturer,action.payload]
           }

       case 'ADD_COURSE':
           return {
               ...state,
                courses:[...state.courses,action.payload],
           }
       case 'ADD_FACULTY':
           return {
           ...state,
                faculty:[...state.faculty,action.payload],
          }
       case 'ADD_DEPARTMENT':
             return {
           ...state,
                faculty:[...state.department,action.payload],
          }
    default:
        return state;
    }
}


export const Storeresources = createContext(Allcontext); 



const StoreProvider = ({ children }: { children: ReactNode }) => {

    const [storeState, storeDispatch] = useReducer(storeReducer,Allcontext);


    return (
        <Storeresources.Provider value={storeState}>
          {children}
        </Storeresources.Provider>
    )
}





export default StoreProvider;