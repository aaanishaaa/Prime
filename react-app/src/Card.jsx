import React from 'react';

const Card = ({ name, email }) => {
    return (
        <div style={{ border: '1px solid yellow', padding: '1rem', borderRadius: '5px' }}>
            <h4>Your Name is {name}</h4>
            <p>Your email is {email}</p>
            <p> and You have Dementia</p>
        </div>
    );
};

export default Card;
