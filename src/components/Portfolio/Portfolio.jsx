import React from 'react';
import './Portfolio.css'
import shoppingImg from '../../assets/shopping-site-firebase.PNG';
import pokedexImg from '../../assets/pokedex.png';
import simongameImg from '../../assets/simongame.PNG'

const Portfolio = () => {
  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="portfolio__container">
          <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={simongameImg} alt="simon game"/>
              </div>
              <h3>Simon Game</h3>

              <div className="portfolio__buttons"> 
              <a href="https://github.com/cmkc109/simon-game" className="btn">Github</a>
              <a href="https://simon-game-bychristy.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
          </article>
          <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={pokedexImg} alt="pokemon search app"/>
              </div>

              <div> 
              <h3>Pokemon Search App</h3>
              <div className="portfolio__buttons"> 
              <a href="http://github.com" className="btn">Github</a>
              <a href="https://pokedex-2022x.netlify.app" className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
              </div>
          </article>

          <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={shoppingImg} alt="shopping site"/>
              </div>
              <h3>Shopping Site with checkout function</h3>

              <div className="portfolio__buttons"> 
              <a href="https://github.com/cmkc109/shopping-website-firebase" className="btn">Github</a>
              <a href="http://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
          </article>
        </div>


    </section>
  )
}

export default Portfolio