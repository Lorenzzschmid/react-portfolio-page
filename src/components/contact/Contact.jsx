import React from 'react'; 
import './contact.css'; 
import {MdOutlineEmail} from 'react-icons/md';  
import {BsSignal} from 'react-icons/bs';
import {BsMessenger} from 'react-icons/bs'; 

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* Contact option 1 */}
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>lo.schmid@proton.me</h5> 
            <a href="mailto:lo.schmid@proton.me" target="blank">Send a message</a>
          </article>
          {/* Contact option 2 */}
          <article className="contact__option">
            <BsSignal className='contact__option-icon'/>
            <h4>Signal</h4>
            <h5>01573-1234567</h5> 
            <a href="https://api.signal.com/send?phone+491573123456" target="blank">Send a message</a>
          </article>
          {/* Contact option 3 */}
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Webdev-Hero</h5> 
            <a href="https://m.me/lo.schmid" target="blank">Send a message</a>
          </article>

        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-main'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact