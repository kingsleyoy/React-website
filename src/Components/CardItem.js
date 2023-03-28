import React from 'react'
import { Link } from 'react-router-dom'
// import Photo from "../Assets/img-home.jpg"


const CardItem = (props) => {
  return (
        <div className='carditem'>
          <Link to="">
                  <figure className='card-pic-holder'>
                      <img src= {props.imageSrc} alt='Card' />
                  </figure>
                  <div className='card-info'>
                      <h3>{props.title}</h3>
                      <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
                  </div>
            </Link>
        </div>
    
  )
}

export default CardItem