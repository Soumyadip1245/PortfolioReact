import React from 'react'
import './contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_fzjb73m', 'template_fl7zr7g', form.current, 'NVXUKKwDLXruOhOlh')
      e.target.reset()
    };
  return (
    <main id="contact">
  <div className="contactcontainer">
    <div className="contactheader">
      <h1>Contact</h1>
    </div>
    <div className="contactleft">
      <div className="contactform">
        <form ref={form} onSubmit={sendEmail} >
        <input type="text" name="name" placeholder='Your Name' required/>
          <input type="text" name="email" placeholder="Your Email" required/>
          <input id="message" type="text" name="email" placeholder="Your Email" required/>
          <button type="submit">Send</button>
      </form>
      </div>
    </div>
  </div>
</main>
  )
}

export default Contact