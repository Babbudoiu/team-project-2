import { MovieBox } from '../movieBox';
import React, { useEffect } from 'react';

export const MovieCard = ({moviesList}) => {

return (
     <div>
     {moviesList.map((data) => {

          return <MovieBox data={data} />; 
     })}
      </div>
       
 );
};

