import React from 'react'
import './WorkCardStyle.css'
import { NavLink } from 'react-router-dom'
import {ImOffice} from 'react-icons/im'


const ExperienceCard = (props) => {
  return (
    
        <div className='project-card'>
          <img src={props.img} alt="Image" />
          <h2 className='project-title'>{props.title}</h2>
          <div className='pro-details'>
            <p>{props.content}</p>
            <div className='pro-btns'>
            <a href={props.view}>
                        <ImOffice size={20}
                            style={{ color: "white", marginRight: "2rem" }} />
                        </a>  
              
            </div>
          </div>
        </div>

  )
}

export default ExperienceCard
