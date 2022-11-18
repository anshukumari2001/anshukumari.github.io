import React from 'react'
import OtherFeed from '../components/OtherFeed'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <OtherFeed heading="CONTACT" text="Let's have a small discussion" />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
