import React from 'react'
import './experience.css'; 
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
        {/* first experience container */}
          <article className="experience__details">
            <BsPatchCheckFill />
            <h4>HTML</h4>
            <small className='text-lighter'>Experienced</small>
          </article>
        {/* second experience container */}
          <article className="experience__details">
            <BsPatchCheckFill />
            <h4>CSS</h4>
            <small className='text-lighter'>Intermediate</small>
          </article>
        {/* third experience container */}
          <article className="experience__details">
            <BsPatchCheckFill />
            <h4>Bootstrap</h4>
            <small className='text-lighter'>Experienced</small>
          </article>
        {/* fourth experience container */}
          <article className="experience__details">
            <BsPatchCheckFill />
            <h4>JavaScript</h4>
            <small className='text-lighter'>Experienced</small>
          </article>
        {/* fifth experience container */}
          <article className="experience__details">
            <BsPatchCheckFill />
            <h4>REACT</h4>
            <small className='text-lighter'>Experienced</small>
          </article>
        </div>

      </div>
      <div className="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
        {/* first experience container */}
          <article className="experience__details">
            <BsPatchCheckFill />
            <h4>HTML</h4>
            <small className='text-lighter'>Experienced</small>
          </article>
        {/* second experience container */}
          <article className="experience__details">
            <BsPatchCheckFill />
            <h4>CSS</h4>
            <small className='text-lighter'>Intermediate</small>
          </article>
        {/* third experience container */}
          <article className="experience__details">
            <BsPatchCheckFill />
            <h4>Bootstrap</h4>
            <small className='text-lighter'>Experienced</small>
          </article>
        {/* fourth experience container */}
          <article className="experience__details">
            <BsPatchCheckFill />
            <h4>JavaScript</h4>
            <small className='text-lighter'>Experienced</small>
          </article>
        {/* fifth experience container */}
          <article className="experience__details">
            <BsPatchCheckFill />
            <h4>REACT</h4>
            <small className='text-lighter'>Experienced</small>
          </article>
        </div>

      </div>
    </div>
    </section>
  )
}



export default Experience