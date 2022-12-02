import React from 'react'
import ShowItem from './ShowItem'

const Shows = ({shows}) => {
  return (
    <div className='app'>
     <h1>Show Time</h1>

     <div className='container'>
      {
        shows.map((show)=>(
          <ShowItem show={show}  key={show.score}/>
        ))
      }
      </div>
    </div>
  )
}

export default Shows