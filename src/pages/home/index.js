import React, { useEffect } from 'react';
import Navbar from '../../components/navbar';
import { findAllMovies } from '../../utils';
import {MovieCard} from '../../components/movieCard';


export const Home = ({movies, setMovies}) => {

  useEffect(() => {
    findAllMovies(setMovies);
  }, []);

    return (
        <div className="pageContainer">
            <Navbar />
            <div className="movBox">
            <h2>Available Movies</h2>
            <MovieCard moviesList={movies}/>
            </div>

        </div>
    )
}

