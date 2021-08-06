import React from 'react';
import ReactPlayer from "react-player";
import { setMovieWatchlist } from '../../utils';
// import { isInWatchlist } from '../../pages/watchlist';

export const MovieBox = ({data}) => {

    const setMovie = () => {
        
    }

    return (
        <div className="movieContainer">
            <img src = {data.img} alt=""></img>
            <ReactPlayer
            className="react-player"
            url={`https://www.youtube.com/watch?${data.trailer}`}
            height="350px"
            width="500px"/>
            <h3>{data.title}</h3>
            <h4>Lead Actors: {data.actor}</h4>
            <h4>Film Genre: {data.category}</h4>
            <h4>{data.watched}</h4>
            <h4>User Rating {data.rating}*</h4>
            <button type="button" onClick={(e) => {
                setMovieWatchlist(e,data, !data.inWathclist,setMovie)
            }}>Add to Watchlist</button>
        </div>
    )
}
