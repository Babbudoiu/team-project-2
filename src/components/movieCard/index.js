import { MovieBox } from '../movieBox';
import React, { useEffect } from 'react';

export const MovieCard = ({moviesList}) => {

return (
     <div className='grid'>
     {moviesList.map((data, index) => {

          return <MovieBox key={index} data={data} />; 
     })}
      </div>
       
 );
};

