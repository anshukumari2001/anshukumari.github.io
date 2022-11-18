import React from 'react'
import './WorkCardStyle.css'
import ExperienceCard from './ExperienceCard'
import ExperienceCardData from './ExperienceCardData'

const Experience = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects </h1>
      <div className='project-container'>
        {
            ExperienceCardData.map((value, index) =>{
                return(
                    <ExperienceCard
                    key={index}
                    img={value.img}
                    title={value.title}
                    content={value.content}
                    view={value.view}
                    />
                )
                
            })
        }

      </div>
    </div>
  )
}

export default Experience
