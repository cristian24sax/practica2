import React from 'react'
import './navbar.css'
export const NavBar = () => {
  return (
    <nav className='container-navBar'>
        <div className='menu'>
            <div className='logo'>Untitled UI</div>
            <ul className='list'>
                <li><a href="#">Home     </a></li>
                <li><a href="#">Products </a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Pricining</a></li>
            </ul>
        </div>
        <div className='start'>
            <button className='login'>Log in</button>
            <button className='signup'>Sign Up</button>
        </div>
    </nav>
  )
}
