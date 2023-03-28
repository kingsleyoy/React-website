import React from 'react'
import Cross from '../Assets/img-1.jpg';
import ContactDetail from '../Components/ContactDetail';
import HeroSection from '../Components/HeroSection';

const Contact = () => {
  return (
    <div>
        <HeroSection
            img = {Cross}
            header = 'Contact'
            detail ='is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
         />
         <ContactDetail />
    </div>
  )
}

export default Contact