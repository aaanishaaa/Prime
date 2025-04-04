import React, { useState } from 'react';

const cardStyle = {
    boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    margin: '20px auto',
    textAlign: 'center',
    fontFamily: 'sans-serif'
};

const Card = ({ name, email, github }) => {
    const [data, setData] = useState([]);
    const userId = github.split('/')[3];

    const getData = async () => {
        const resp = await fetch(`https://api.github.com/users/${userId}`);
        const temp = await resp.json();
        setData(temp);
    };

    return (
        <div style={cardStyle}>
            <h1>{name}</h1>
            <p>{email}</p>
            <a href={github} target="_blank" rel="noopener noreferrer">
                Check out
            </a>
        </div>
    );
};

export default Card;