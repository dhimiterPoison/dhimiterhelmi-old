import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    //TODO: da bloccare sugli schermi piccoli ?
    <div className='flex flex-col w-96 py-14 px-4'>
        <Logo />
    </div>
  )
}

export default Navbar