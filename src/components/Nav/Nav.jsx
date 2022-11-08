import React from 'react';
import { BiHome, BiUser } from 'react-icons/bi'
import { AiOutlineMail, AiOutlineBook, AiOutlineStar } from 'react-icons/ai';
 
import { useState } from 'react';

import './Nav.css';

const Nav = () => {
  const [ navActive, setNavActive] = useState("#")

  return (
    <nav>
      <a href="#" 
        onClick={() => setNavActive('#')}
        className={navActive === "#" ? 'active' : ""}
        ><BiHome /></a>
      <a href="#about"
         onClick={() => setNavActive('#about')}
         className={navActive === "#about" ? 'active' : ""}
        ><BiUser /></a>
      <a href="#experience"
         onClick={() => setNavActive('#experience')}
         className={navActive === "#experience" ? 'active' : ""}
      ><AiOutlineStar /></a>
      <a href="#portfolio"
        onClick={() => setNavActive('#portfolio')}
        className={navActive === "#portfolio" ? 'active' : ""}
      ><AiOutlineBook /></a>
      <a href="#contact"
        onClick={() => setNavActive('#contact')}
        className={navActive === "#contact" ? 'active' : ""}
      ><AiOutlineMail /></a>
    </nav>
  )
}

export default Nav