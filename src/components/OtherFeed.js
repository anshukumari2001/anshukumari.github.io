import './OtherFeedStyle.css'

import React from 'react'

const OtherFeed = ({heading, text, text2, text3}) => {
  return (
    <div className='otherfeed'>
        <div className='heading'>
            <h1>{heading}</h1>  
            <p>{text}</p>
            <p>{text2}</p>
            <p>{text3}</p>
        </div>

      
    </div>
  )
}

export default OtherFeed
