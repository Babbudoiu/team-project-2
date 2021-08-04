import React from 'react';
import { MovieContainer } from '../../styledComponents';
import { addToWatchlist } from '../../utils';

export const MovieBox = ({data}) => {

    return (
        <MovieContainer className="movies">
            <h3>{data.title}</h3>
            <h5>Lead Actors: {data.actor}</h5>
            <h5>Film Genre: {data.category}</h5>
            <h4>{data.watched}</h4>
            <h4>User Rating {data.rating}*</h4>
            <button type="button" onClick>Add to Watchlist</button>
        </MovieContainer>
    )
}
