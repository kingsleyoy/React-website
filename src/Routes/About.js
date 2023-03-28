import React from 'react'
import HeroSection from '../Components/HeroSection'
import Sea from '../Assets/img-2.jpg';
import AboutDetail from '../Components/AboutDetail';


const About = () => {
  return (
    <div>
        <HeroSection 
          img={Sea}
          header ='About'
          detail = ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
        />
        <AboutDetail />
    </div>
  )
}

export default About