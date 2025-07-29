import React from 'react'

interface Option_s{
    value: string;
    label: string;
}
interface Select{
    label:string;
    options: Array<Option_s>;
    placeholder: string;
    styles: string;

}
function Select(props:Select) {
  return (
      <div> 
          <ul>
              {props.options.map((v,index) => {
                  return <li key={index}>{v.label}</li>
              })}
          </ul>
    </div> 
  )
}

export default Select