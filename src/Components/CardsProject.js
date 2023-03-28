import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"
import { Link } from 'react-router-dom'
import Photo from "../Assets/img-home.jpg"
import Photo1 from "../Assets/img-1.jpg"
import Photo2 from "../Assets/img-2.jpg"


const CardsProject = () => {
  return (
    <div className='card-container'>
        <div className='card-holder'>
            <h1>Projects</h1>
            <Link to="/" className='item-container'>
                <CardItem imageSrc = {Photo} title='React Website' />
                <CardItem imageSrc = {Photo1} title='Bootstrap website'/>
                <CardItem imageSrc = {Photo2} title='Web with EJS'/>
            </Link>
        </div>
    </div>
  )
}

export default CardsProject