import React from 'react'
import Trollface from '../assets/Trollface.png'
const Header = () => {
  return (
    <header className='header'>
      <img 
        src={Trollface}
      />
      <h1>Meme Generator</h1>

    </header>
  )
}

export default Header