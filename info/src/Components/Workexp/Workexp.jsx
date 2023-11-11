import React from 'react'
import './Workexp.css'
import Card from './Card'
import Work from './work.jpg'

const Workexp = () => {
  return (
    <>
          <div className='experience'>
        <h1 className='exp'>Work Experience  :-</h1> 
        <Card
          display= {Work}
          Company=" Cloud Computing Cell"
          WorkDone= " I work as a Backend for last 8 months and now promote as Fullstack Developer" 
          Experience= " 1yr Experience"
        />
        <h3 className='exper'>
          I'm currently looking to join a <span className='cross'>cross-functional team</span>
        </h3>
         <h3 className='exper'>
          that values improving people's lives through accessible design
        </h3>
      </div> 
    </>
  )
}

export default Workexp
