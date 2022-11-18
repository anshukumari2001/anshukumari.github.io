import React from 'react'
import OtherFeed from '../components/OtherFeed'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Navbar/>
      <OtherFeed heading="ABOUT ME" text="A self-motivated hardworker with good problem solving skills." text2="I always enjoy learning and I am constantly seeking out learning new opportunities."
                                     text3="Good knowledge of DSA, ML, Web development using React and Springboot"
                                       />
      <Footer />
    </div>
  )
}

export default About
