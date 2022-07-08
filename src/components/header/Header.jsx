import React from 'react'; 
import CTA from './Cv';
import './header.css'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="main-container header__container">
        <h5>Hi I'm</h5>
        <h1>Lorenz</h1>
        <h5 className="text-lighter">Mernstack Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header