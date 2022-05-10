import React from 'react'

function HomePage({poster_path,title}) {
  return (
      <div className= 'movieData'>
                   <img  className='moviePic' src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt="" />
                 
                   <h2 className='movieTitle'>{title}</h2>
               </div>
  )
}

export default HomePage
