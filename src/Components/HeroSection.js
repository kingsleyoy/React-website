import React from 'react'
import './HeroSection.css'

const HeroSection = (props) => {
    const { img } = props;
    const herosectionBg = {
        backgroundImage: `url(${img})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:"100%",
        height: "80vh",
        position:"relative"
    }
  return (
    <div style={herosectionBg}>
        <div className='herosection-toner'>
            <div className='herosection-holder'>
                <div className='herosection-content'>
                    <h1>{props.header}</h1>
                    <p>{props.detail}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection