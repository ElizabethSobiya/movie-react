import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Movies.css'

function HomePage() {

    const [movies, setMovies] = useState ([])

    useEffect(() => {
       axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716')
       .then( (res) => { setMovies(res.data.results)})
    },[])

  return (
    <>
    <h1> popular movies </h1>
    <div id=  'movieWrapper'>
      {movies.map ((movie, i) => {
          return (
            <div className= 'movieData'>
                <img  className='moviePic' src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt="" />
               
                <h2 className='movieTitle'>{movie.title}</h2>
            </div>
          )
     
          
      })
      }
      </div>
    </>
  )
}

export default HomePage