import React, { useState, useEffect} from 'react'
import Navbar from '../../components/navbar'
import { watchlistMovies } from '../../utils'
import { MovieCard } from '../../components/movieCard'

// export const isInWatchlist = () => {
//     if (isInWatchlist === false) {
//        <MovieCard style={{display: "none"}} />
//     } else {
//         <MovieCard style={{display: "block"}} />
//     }
//   }

export const Watchlist =  ({movies, setMovies}) => {

    useEffect(() => {
        
        watchlistMovies(setMovies);
      }, []);
    
      
    return (
        <div className="pageContainer">
            <Navbar />
            <div className="movBox">
            <MovieCard moviesList={movies}/>
            </div>
        </div>
        
    )
};

