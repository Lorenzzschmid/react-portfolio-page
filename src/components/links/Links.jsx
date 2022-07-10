import React from 'react';
import './links.css'; 
import Link1 from '../../assets/link1.png';
import Link2 from '../../assets/link2.png'; 
import Link3 from '../../assets/link3.png'; 
import Link4 from '../../assets/link4.png'; 
import Link5 from '../../assets/link5.png'; 
import Link6 from '../../assets/link6.png';  


const Links = () => {
  return (
    <section id='links'>
      <h5>Links to useful sources</h5>
      <h2>Sources</h2>

      <div className="container links__container">
        <article className="link">
          <div className="link__preview">
            <img src={Link1} alt="Link One" />
            <h5 className='link__name'>Fireship</h5>
            <small className='lnk__recommend'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam architecto nemo quam aut a. Autem rem velit placeat repudiandae! Dignissimos, a quaerat corrupti magnam quae quo soluta nam qui!
            </small>
          </div>
        </article>
        <article className="link">
          <div className="link-preview">
            <img src={Link1} alt="Link One" />
            <h5 className='link__name'>Fireship</h5>
            <small className='lnk__recommend'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam architecto nemo quam aut a. Autem rem velit placeat repudiandae! Dignissimos, a quaerat corrupti magnam quae quo soluta nam qui!
            </small>
          </div>
        </article><article className="link">
          <div className="link-preview">
            <img src={Link1} alt="Link One" />
            <h5 className='link__name'>Fireship</h5>
            <small className='lnk__recommend'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam architecto nemo quam aut a. Autem rem velit placeat repudiandae! Dignissimos, a quaerat corrupti magnam quae quo soluta nam qui!
            </small>
          </div>
        </article><article className="link">
          <div className="link-preview">
            <img src={Link1} alt="Link One" />
            <h5 className='link__name'>Fireship</h5>
            <small className='lnk__recommend'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis ullam architecto nemo quam aut a. Autem rem velit placeat repudiandae! Dignissimos, a quaerat corrupti magnam quae quo soluta nam qui!
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Links