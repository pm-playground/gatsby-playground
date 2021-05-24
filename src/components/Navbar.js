import React from 'react'
import {Link} from 'gatsby'
import Logo from '../assets/icons/Logo'

export default function Navbar() {
  return (
    <nav>
     <Logo height={50}/>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/aboutus'>About Us</Link>
        <Link to='/deal'>Deal</Link>
        <Link to='/service'>Service</Link>
        <Link to='/partner'>Partner</Link>
        <Link to='/contact'>Contact</Link>
      </div>     
    </nav>
  )
}
