import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div>
      <p class="copyright">Created by Christy Mak. {currentYear}.</p>
   </div>
     
  )
}

export default Footer