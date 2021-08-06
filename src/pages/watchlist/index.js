import React from 'react'
import Navbar from '../../components/navbar'
// import { watchlistMovies } from '../../utils'
import { MovieCard } from '../../components/movieCard'

   
export const Watchlist =  ({movies}) => {
    
    let movieArray = movies.filter(movie => movie.inWatchlist === true)
     
    return (
        <div className="pageContainer">
            <Navbar />
            <div className="movBox">
            <MovieCard moviesList={movieArray}/>
            </div>
        </div>
    )
};

