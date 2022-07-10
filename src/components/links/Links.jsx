import React from 'react';
import './links.css'; 
import Link1 from '../../assets/link1.png';
import Link2 from '../../assets/link2.png'; 
import Link3 from '../../assets/link3.png'; 
import Link4 from '../../assets/link4.png'; 
import Link5 from '../../assets/link5.png'; 
import Link6 from '../../assets/link6.png';  

//import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper'; 

import {Swiper, SwiperSlide} from 'swiper/react'; 

//Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 


const links = [
  {
    name: Link1,
    link: "https://fireship.io",
    description: "Fireship.io is a gateway drug for developers who want to build awesome web & mobile apps."
  },
  {
    name: Link2,
    link: "https://courses.webdevsimplified.com",
    description: "On point explanations for learning Web Development"
  },
  {
    name: Link3,
    link: "A full Course on Cyber-Security",
    description: "A fun way to learn cyber security. Hands-on security training through real-world scenarios."
  },
  {
    name: Link4,
    link: "https://developer.mozilla.org",
    description: "Resources for Developers, by Developers."
  },
  {
    name: Link5,
    link: "https://codewars.com",
    description: "Achieve Mastery Through Challenge."
  },
  {
    name: Link6,
    link: "https://frontendmasters.com",
    description: "Advance your skills with In-Depth, modern Front-End engineering courses."
  }
]

const Links = () => {
  return (
    <section id='links'>
      <h5>Links to useful sources</h5>
      <h2>Sources</h2>

      <div className="container links__container">
        {
          links.map(({name, link, description}, index) => {
            return(
            <article key={index} className="link">
              <div className="link__preview">
                <img src={name} alt="Recommendation" />
              </div>
                <h5 className='link__name'>{link}</h5>
                <small className='lnk__recommend'>
                {description}
                </small>
              
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Links