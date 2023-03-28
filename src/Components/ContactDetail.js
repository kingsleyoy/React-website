import React from 'react'
import './ContactDetail.css'
import Map from './Map'

const ContactDetail = () => {
  return (
    <div className='contact-container'>
        <div className='contact-holder'>
            <div className='contact-content'>
                <h2>Location</h2>
                <div className='contact-location'>
                    <div className='contact-map'>
                      <Map />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactDetail