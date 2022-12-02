import React from 'react'
import { Link } from 'react-router-dom';

const ShowItem = ({show}) => {
  return (
            <Link to={`/summary/${show.show.name}`}>
               <div className="movie">
                <div>
                    <p>Rating : {show.show.rating.average !==" " ? 'N/A' : show.show.rating.average}</p>
                </div>
                <div>
                    <img src={show.show.image.medium} alt={show.show.name} />
                </div>
                <div>
                    <span>{show.show.genres[0]}</span>
                    <h3>{show.show.name}</h3>
                </div>
               </div>
            </Link>
         
  )
}

export default ShowItem