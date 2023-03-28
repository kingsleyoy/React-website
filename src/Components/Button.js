import React from 'react';
import "./Button.css";
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <div><button className={`btn ${props.type}`}><Link to='/contact'><span className="btn-title">{props.text}</span></Link></button></div>
  )
}

export default Button