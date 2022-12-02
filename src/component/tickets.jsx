import React from 'react'

const Tickets = () => {
    const movieData = JSON.parse(localStorage.getItem("show"));
    console.log(movieData);
  return (
    <>
    <div className='container d-block text-center'>
        <h1 className='text-center mt-5 w-100'>{movieData[0]}</h1>
        <br></br>
        <p className='text-white'>Your {movieData[3]} tickets are booked for {movieData[2]} on {movieData[1]}</p>
        <h4 className='text-white'>Total: ${movieData[4]}</h4>
    </div>
    </>
  )
}

export default Tickets