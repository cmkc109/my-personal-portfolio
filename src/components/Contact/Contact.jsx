import React, {useRef, useState} from 'react';
import emailjs from 'emailjs-com'
import './Contact.css';
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';

const Contact = () => {
  const [messageStatus, setMessageStatus] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gyaef8l', 'template_1slc9kk', form.current, 'p41oqHOpLs5QBP_wb')
    e.target.reset();  
    setMessageStatus(true);
  };

  return (
    <section id="contact">
       <h5>Thank you for visiting my page.</h5>
      <h5>Let's get in touch!</h5>
      <h2>Contact Me</h2>
      <div className="contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>cmkc109@hotmail.com</h5>
            <a href="mailto:cmkc109@hotmail.com">Send me an email</a>
          </article>

          <article className="contact__option">
            <AiOutlineLinkedin />
            <h4>LinkedIn</h4>
            <a href="www.linkedin.com/in/christykcmak">Connect with me on LinkedIn</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name"></input>
          <input type="email" name="email" placeholder="Your Email"></input>
          <textarea name="message" id="" rows="7" placeholder="Your Message"></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
          {messageStatus && <p>😀Thank you for your message!</p>}
        </form>
      
      </div>
    </section>
  )
}

export default Contact