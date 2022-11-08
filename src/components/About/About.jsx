import React from 'react';
import aboutImage from '../../assets/pharmacist.png';

import './About.css'

const About = () => {

  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="about__container"> 
        <div className="about__content">
        <p>After completing my doctorate degree in Pharmacy and working as a pharmacist for a year, 
          I was motivated to delve into software programming.  I had an epiphany to create a tool to
           help me with repetitive tasks that I had to do as a pharmacist. I first searched online 
           for available tools to use, but I couldn't find anything that met my requirements. Well, 
           if there isn’t anything available, then I just have to make one myself! After successfully
            developing a simple calculation tool for use at work, my desire to create better 
            applications drove me to learn coding on my own. Currently, I am a Software Engineer 
            Fellow at Formation. I am excited to combine my past experiences in the healthcare 
            setting to tackle new challenges with vigor and contribute to new technologies that can 
            better people’s lives.</p>
        </div>
        <div className="about__me">
       </div>

    </div>
 

    </section>
  )
}

export default About