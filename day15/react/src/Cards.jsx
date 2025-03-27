import React from 'react'

const Cards = ({key,title,price}) => {
  return (
    <div style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
        <p>{key}</p>
        <h1>{title}</h1>
        <p>{price}</p>
    </div>
  )
}

export default Cards