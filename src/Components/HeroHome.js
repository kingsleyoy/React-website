import React from 'react';
import Button from './Button';
import "./HeroHome.css";


const HeroHome = () => {
  return (
    <div className='hero-home'>
        <div className='hero-container'>
            <div className='hero-info'>
                <h1>React Developer .</h1>
                <p>Always ready to create your website</p>
                <div className='btn-container'>
                    <Button text="Contact Me" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroHome