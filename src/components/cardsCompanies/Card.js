import React from 'react'
import './card.css'
export const Card = (dat) => {

    const {name,description,btn,color} = dat
  return (
    <div className='container-card' style={{background:color}}>
        <div className='content-title'>{name}</div>
        <div className='box'>
            <div className='card-title'>{name}</div>
            <div className='card-description'>{description}</div>
            <div className='card-btn'>{btn}</div>
        </div>
    </div>
  )
}
