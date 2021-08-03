import { MovieBox } from '../movieBox';
import React from 'react';

export const MovieCard = ({moviesList}) => {

 return (
     <div>
     {moviesList
          .map((data) => {
             return <MovieBox {...data}/>;
        })}
      </div>
 );
};

