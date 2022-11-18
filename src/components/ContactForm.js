import './ContactFormStyle.css'

import React,{useState, useRef} from 'react'
import emailjs from '@emailjs/browser';


const ContactForm = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b5cmta9', 'template_h2qrsk5', form.current, 'Z8gogpdmKGBWJ-j7r')
    .then(
        message => {
            if (message.text == 'OK') {
                alert('Your mail has been send. Thank you for connecting.');
            }
            else {
                console.error(message);
                alert('There is error at sending message. ')

            }

        });
  };

  return (
    <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name"
        />

        <label>Email Id</label>
        <input type="email" name="user_email" 
        />

        <label>subject</label>
        <input type="text" 
        name="subject"
        />

        <label>Message</label>
        <textarea rows="6" 
        name="message"
        placeholder='Type Your Message Here....' 
        />

        <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm;

