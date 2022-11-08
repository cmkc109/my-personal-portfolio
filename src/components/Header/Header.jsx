import React from 'react'
import Cta from './Cta';
import profilePic from '../../assets/profile-pic.png';
import HeaderSocials from './HeaderSocials'
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Christy</h1>
          <h5 className="text-light">Full-stack Software Engineer</h5>
      <Cta />
      <HeaderSocials />
      {/* My profile picture */}
      <div className="me">
        <img className="profile-pic" src={profilePic} alt="christy"/>
      </div>

      <a href="#contact" className="scroll_down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header