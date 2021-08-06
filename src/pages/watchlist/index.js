import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar'
import { MovieCard } from '../../components/movieCard'

import { deleteMovie } from '../../utils';


   
export const Watchlist =  ({movies}) => {
    const [moArray, setMoArray] = useState([]);

    useEffect(()=> {
        let movieArray = movies.filter(movie => movie.inWatchlist === true);
        setMoArray(movieArray)
    }, [ movies])

    
    let watchlistText = "Your Watchlist";


     return (
        <div className="pageContainer">
            <Navbar />
            <div className="movBox">
            <h2>{watchlistText}</h2>
            <MovieCard moviesList={moArray}/>
            </div>
        </div>
    )
};

