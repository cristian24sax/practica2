import React from 'react'
import './info.css'
export const Info = () => {
  return (
    <main className='container-info'>
        <div className='container-description'>         
            <div className='content' >
                <div className='span'>
                    <span>What's new?</span>
                    <div >instatly issue virtual cards</div>
                </div>
                <h3 className='title'>No more business banking headaches</h3>
                <div className='description' >
                    Untitled is a next-gen financial technology company in the process of reinventing banking.
                </div>
            </div>

            <div className='buttons'>
                <button className='demo'> Demo</button>
                <button className='signup'>Sign up</button>
            </div>
        </div>
        <div className='container-img'>
            <img src={require('../../assets/img1.jpg')} alt='img1'/>
        </div>
    </main>
  )
}
