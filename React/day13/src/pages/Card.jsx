import React from "react";

const Card = ({ title, text }) => {
  return (
    <div>
      <h3>{title}</h3>
      <label>{text}</label>
    </div>
  );
};

export default Card;