import React from 'react'
import './style.css'

const Card = ({name,email}) => {
  return (
    <div class="card">
        <h2> {name} </h2>
        <p> {email}</p>
    </div>
  )
}

export default Card