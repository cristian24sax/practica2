import React from 'react'
import './companies.css'
export const Companies = () => {
  return (
    <main className='container-companies'>
        <div className='eslogan'>
        Join 4,000+ companies already growing
        </div>
        <div className='socios'>
            <img src={require('../../assets/companies.jpg')} alt='img2'/>
        </div>
    </main>
  )
}
