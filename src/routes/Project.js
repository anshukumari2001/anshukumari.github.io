import React from 'react'
import OtherFeed from '../components/OtherFeed'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <OtherFeed heading="PROJECT" text="Some of my recent projects are" />
      <Work />
      <Footer />
    </div>
  )
}

export default Project
