import React from 'react'
import HeroSection from '../Components/HeroSection'
import Sand from '../Assets/img-8.jpg';
import CardsProject from '../Components/CardsProject';


const Projects = () => {
  return (
    <div>
        <HeroSection 
            img = {Sand}
            header = 'Projects'
            detail = 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
        />
        <CardsProject />
    </div>
  )
}

export default Projects