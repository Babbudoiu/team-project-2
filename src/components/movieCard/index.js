import { MovieBox } from '../movieBox';
import React from 'react';

export const MovieCard = ({moviesList}) => {

 return (
     <div>
     {moviesList
          .map((data) => {
               console.log(data);
             return <MovieBox data={data}/>;
        })}
      </div>
       
 );
};

