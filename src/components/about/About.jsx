import React from 'react'; 
import './about.css'; 
import Me from '../../assets/me2.png'; 
import {FaAward} from 'react-icons/fa'; 

const About = () => {
  return (
    <section id='about'>
      <h5>Getting into the creation of responsive Websites, currently working with React.</h5>
      <h2>Visible - interactive - responsive - Creations contributing and deploying entities to the global-village.</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About" />
          </div>
          <div className="about__content">
            <div className="about__cards">
            {/* First experience container */}
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>Practicing and Learning with Projects</small>
              </article>
            {/* second experience container */}
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Clients</h5>
                <small>Up for every Project</small>
              </article>
              {/* third experience container */}
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Projects</h5>
                <small>Check my Github pendejo</small>
              </article>
            </div>

            <p>
              What the fuck is wrong with you, ...
            </p>

            <a href="#contact" className='btn btn-primary'>Happy to hear from you</a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About