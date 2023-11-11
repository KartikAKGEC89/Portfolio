import React from 'react'
import './Workexp.css'

const Card = ({ display,Company, WorkDone, Experience }) => {
  return (
    <div className='card'>
      <div>
      <h4 className='work'>{Company}</h4>
      <br />
          <img src={display} alt='cloud' width={"100vw"}/>
        <br />
         <br />
        <h6 className='work'>{WorkDone}</h6>
        <h6 className='work'>{Experience}</h6>
        </div>
    </div>
  )
}

export default Card
