import React from 'react'
import './Home.css'
import Self from './image 1.png'

const Home = () => {
  return (
    <>
          <div className='home'>
              <div className='homepic'>
                  <img src={Self} alt='Self' className='home-image' />
              </div>
              <div className='homedata'>
                  <div className='hello'>
                      <h3 className='intro'>Hello! I Am <span>Kartik Tyagi</span></h3>
              </div>
              <h3 className='intro'>A FullStack Developer who</h3>
              <h1 className='intro'>Judges a book by its <span className='cover'>cover</span>...</h1>
              <h3 className='intro'> Because if the cover does not impress you what else can?</h3>    
              </div>
          </div>
    </>
  )
}

export default Home
