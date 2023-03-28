import React from 'react';
import "./Button.css";

const Button = (props) => {
  return (
    <div><button className={`btn ${props.type}`}><span className="btn-title">{props.text}</span></button></div>
  )
}

export default Button