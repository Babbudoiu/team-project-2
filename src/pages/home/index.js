import React, {useState, useEffect} from 'react'
import { PageContainer } from "../../styledComponents"
import Navbar from '../../components/navbar';
// import styled from 'styled-components';
import { findAllMovies } from '../../utils';
import {MovieCard} from '../../components/movieCard' 

export const Home = ({movies, setMovies}) => {

  useEffect(() => {
    findAllMovies(setMovies);
  }, []);

    return (
        <PageContainer>
            <Navbar />
            <div>
              <MovieCard moviesList={movies}/>
            </div>
            
        </PageContainer>
    )
}
