import React, {useState, useEffect} from 'react';
import Navbar from '../../components/navbar';
import { findAllMovies } from '../../utils';
import {MovieCard} from '../../components/movieCard';
// import Carousel from 'react-gallery-carousel';
// import 'react-gallery-carousel/dist/index.css';

export const Home = ({movies, setMovies}) => {

  useEffect(() => {
    findAllMovies(setMovies);
  }, []);

    return (
        <div className="pageContainer">
            <Navbar />
            <div className="movBox">
            <h2>Available Movies</h2>
            {/* <Carousel> */}
            <MovieCard moviesList={movies}/>
            {/* </Carousel> */}
            </div>

        </div>
    )
}

