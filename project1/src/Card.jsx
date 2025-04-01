import React from 'react'

const Card = ({ name, email, github }) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <a href={github}>Check out</a>
        </div>
    )
}

export default Card