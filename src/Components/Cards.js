import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"
import Photo from "../Assets/img-home.jpg"
import Photo1 from "../Assets/img-1.jpg"
import Photo2 from "../Assets/img-2.jpg"
import Photo3 from "../Assets/img-3.jpg"
import Photo4 from "../Assets/img-4.jpg"
import Photo5 from "../Assets/img-5.jpg"


const Cards = () => {
  return (
    <div className='card-container'>
        <div className='card-holder'>
            <h1>Projects</h1>
            <div className='item-container'>
                <CardItem imageSrc = {Photo} title='React Website' />
                <CardItem imageSrc = {Photo1} title='Bootstrap website'/>
                <CardItem imageSrc = {Photo2} title='Web with EJS'/>
                <CardItem imageSrc = {Photo3} title='Web with database'/>
                <CardItem imageSrc = {Photo4} title='React web 2'/>
                <CardItem imageSrc = {Photo5} title='React web 3'/>
            </div>
        </div>
    </div>
  )
}

export default Cards