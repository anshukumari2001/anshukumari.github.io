import React from 'react'
import './FeedStyle.css'
import FrontImg from '../images/portfolio.jpeg'
import ReactRoundedImage from "react-rounded-image";
import {Link} from 'react-router-dom'

const Feed = () => {
  return (
    <div className='feed'>
      
      <div className='mask'>
        <img classname='front-image' src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2132&q=80" alt="FrontImg" />
      </div>
      <div className='content'>
      <ReactRoundedImage 
      display= "block"
      margin-left= "auto"
      margin-right= "auto"
      position= 'absolute'
      alignSelf= 'center'
      roundedSize="12"
      hoverShadow= "true"
      hoverColor="black"
      image={FrontImg} />
        <p>Hello, I am Anshu Kumari</p>
        <h1>Developer By Passion NOT By Profession</h1>
      
      <div >
        <Link to='/project' className="btn">Projects</Link>
        <Link to='/contact' className="btn btn-light">Contact</Link>
      </div>
      </div>
    </div>
  )
}

export default Feed
