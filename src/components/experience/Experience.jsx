import React from 'react'
import './experience.css'; 
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    {/* Frontend Experience */}
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
        {/* first Frontend container */}
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>HTML</h4>
              <small className='text-lighter'>Experienced</small>
            </div>
          </article>
        {/* second Frontend container */}
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>CSS</h4>
              <small className='text-lighter'>Intermediate</small>
            </div>
          </article>
        {/* third Frontend container */}
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Bootstrap</h4>
              <small className='text-lighter'>Experienced</small>
            </div>
          </article>
        {/* fourth Frontend container */}
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>JavaScript</h4>
              <small className='text-lighter'>Experienced</small>
            </div>
          </article>
        {/* fifth Frontend container */}
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>REACT</h4>
              <small className='text-lighter'>Experienced</small>
            </div>
          </article>
        </div>
    {/* Backend Experience */}
      </div>
      <div className="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
        {/* first Backend container */}
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Node JS</h4>
              <small className='text-lighter'>Experienced</small>
            </div>
          </article>
        {/* second Backend container */}
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>MongoDB</h4>
              <small className='text-lighter'>Intermediate</small>
            </div>
          </article>
        {/* third Backend container */}
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>PHP</h4>
              <small className='text-lighter'>Experienced</small>
            </div>
          </article>
        {/* fourth Backend container */}
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>MySQL</h4>
              <small className='text-lighter'>Experienced</small>
            </div>
          </article>
        {/* fifth Backend container */}
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Python</h4>
              <small className='text-lighter'>Experienced</small>
            </div>
          </article>
        </div>

      </div>
    </div>
    </section>
  )
}



export default Experience