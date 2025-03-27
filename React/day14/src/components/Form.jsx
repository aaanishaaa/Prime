import React from 'react'
import { useState } from 'react';
const Form = () => {
    let name="anisha";
    const[monitor,remote]=useState(name);
    console.log("rendered",monitor);
    const handleChange = (e) => {
        setTimeout(() => {
            console.log(e.target.value);
            remote(e.target.value.toUpperCase());
        },2000);
        console.log("updating",monitor);
    };
  return (
    <div>
        <p>Name</p>
        <input placeholder='Name' value={monitor} onChange={handleChange}/>
        <p>Hello {monitor}!</p>
    </div>
  )

}

export default Form