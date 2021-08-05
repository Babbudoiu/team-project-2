import React, { useState, useEffect} from 'react'
import Navbar from '../../components/navbar'
import { PageContainer, MovBox } from '../../styledComponents'
import { watchlistMovies } from '../../utils'
import { MovieCard } from '../../components/movieCard'

export const Watchlist =  ({movies, setMovies}) => {

    useEffect(() => {
        // inWatchlist()
        watchlistMovies(setMovies);
      }, []);
    
        //   const inWatchlist = () => {
        //   if (inWatchlist === false) {
        //      <MovieCard style={{display: "none"}} />
        //   } else {
        //       <MovieCard style={{display: "block"}} />
        //   }
        // }
      
    return (
        <PageContainer>
            <Navbar />
            <MovBox>
            <MovieCard moviesList={movies}/>
            </MovBox>
        </PageContainer>
        
    )
};

