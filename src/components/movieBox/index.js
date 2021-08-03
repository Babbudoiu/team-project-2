import React from 'react';
import { MovieContainer } from '../../styledComponents';

export const MovieBox = ({title, actor, category, watched, rating}) => {

    return (
        <MovieContainer className="movies">
            <h3>{title}</h3>
            <h5>Lead Actors: {actor}</h5>
            <h5>Film Genre: {category}</h5>
            <h4>{watched}</h4>
            <h4>User Rating {rating}*</h4>
        </MovieContainer>
    )
}
