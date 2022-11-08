import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import './Experience.css'

const Experience = () => {
  return (
    <section id="experience">
     <h5>Skills and Experience</h5>   
     <h2>My Experience</h2>

     <div className="experience__container">
        <article className="experience__card">
          <h3>Front-end development</h3>
           <div className="experience__content"> 
             <div className="experience__details">
                <div className="experience__icon"><AiOutlineCheckCircle /></div> 
                <h4>HTML</h4>
             </div>
             <div className="experience__details">
                <div className="experience__icon"><AiOutlineCheckCircle /></div> 
                <h4>CSS</h4>
             </div>
             <div className="experience__details">
                <div className="experience__icon"><AiOutlineCheckCircle /></div> 
                <h4>Javascript</h4>
             </div>
             <div className="experience__details">
                <div className="experience__icon"><AiOutlineCheckCircle /></div> 
                <h4>React</h4>
             </div>
             <div className="experience__details">
                <div className="experience__icon"><AiOutlineCheckCircle /></div> 
                <h4>Redux</h4>
             </div>
             <div className="experience__details">
                <div className="experience__icon"><AiOutlineCheckCircle /></div> 
                <h4>Bootstrap</h4>
             </div>  
           </div>   
        </article>

        <article className="experience__card">
           <h3>Back-end development</h3>
           <div className="experience__content"> 
           <div className="experience__details">
                <div className="experience__icon"><AiOutlineCheckCircle /></div> 
                <h4>Node JS</h4>
           </div> 
           <div className="experience__details">
                <div className="experience__icon"><AiOutlineCheckCircle /></div> 
                <h4>Express JS</h4>
           </div> 
           <div className="experience__details">
                <div className="experience__icon"><AiOutlineCheckCircle /></div> 
                <h4>MongoDB</h4>
           </div> 
           <div className="experience__details">
                <div className="experience__icon"><AiOutlineCheckCircle /></div> 
                <h4>Firebase</h4>
           </div> 
          </div>       
        </article>

       </div>

 
    </section>
  )
}

export default Experience