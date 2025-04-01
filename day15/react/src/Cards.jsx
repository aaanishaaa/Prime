import React from 'react'

const Cards = ({title,price,images}) => {
  return (
    <div style={{ border: "1px solid black", borderRadius: "10px", margin: "12px", padding: "15px", backgroundColor: "white" }}>
      <h1>{title}</h1>
      <img style={{ width: "150px" }} src={images} alt={title} />
      <p>${price}</p>
    </div>
  )
}

export default Cards