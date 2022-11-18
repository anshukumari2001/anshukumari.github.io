import React from 'react'
import OtherFeed from '../components/OtherFeed'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Experience from '../components/Experience'

const MyExperience = () => {
    return (
        <div>
            <Navbar />
            <OtherFeed heading="Experience" text="Some of my perious experiences are..."
            />
            <Experience />
            <Footer />
        </div>
    )
}

export default MyExperience
