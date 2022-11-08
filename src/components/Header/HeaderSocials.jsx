import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin size="25" /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub size="25" /></a>
    </div>
  )
}

export default HeaderSocials