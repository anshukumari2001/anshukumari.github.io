import React from 'react'
import './WorkCardStyle.css'
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'

const Work = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects </h1>
      <div className='project-container'>
        {
            WorkCardData.map((value, index) =>{
                return(
                    <WorkCard
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

export default Work
