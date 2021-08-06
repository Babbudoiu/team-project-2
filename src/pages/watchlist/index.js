import React, { useEffect } from 'react'
import Navbar from '../../components/navbar'
import { MovieCard } from '../../components/movieCard'
import { setMovieWatchlist } from '../../utils';

   
export const Watchlist =  ({movies}) => {

    let movieArray = movies.filter(movie => movie.inWatchlist === true);

    let watchlistText = "Your Watchlist";

     return (
        <div className="pageContainer">
            <Navbar />
            <div className="movBox">
                <h2>{watchlistText}</h2>
            <MovieCard moviesList={movieArray}/>
            </div>
        </div>
    )
};

