import React, {useState, useEffect} from 'react';
import { PageContainer } from "../../styledComponents";
import Navbar from '../../components/navbar';
import styled from 'styled-components';
import { findAllMovies } from '../../utils';
import {MovieCard} from '../../components/movieCard';
// import Carousel from 'react-gallery-carousel';
// import 'react-gallery-carousel/dist/index.css';

export const Home = ({movies, setMovies}) => {

  useEffect(() => {
    findAllMovies(setMovies);
  }, []);

    return (
        <PageContainer>
            <Navbar />
            <MovBox>
            <h2>Available Movies</h2>
            {/* <Carousel> */}
            <MovieCard moviesList={movies}/>
            {/* </Carousel> */}
            </MovBox>
        </PageContainer>
    )
}

const MovBox = styled.div`
    justify-content: center;
    margin: auto;
`