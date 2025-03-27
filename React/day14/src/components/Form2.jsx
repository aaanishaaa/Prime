import React from 'react'
// import { useState } from 'react';

const Form = ({setName,setEmail,setPassword,handleSubmit}) => {
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder=' enter Name' onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='Please enter email' onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder='enter password' onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form;