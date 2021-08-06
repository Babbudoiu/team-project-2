import React from 'react';
import ReactPlayer from "react-player";
import { setMovieWatchlist } from '../../utils';
import { deleteMovie } from "../../utils"

export const MovieBox = ({data}) => {

   let buttonText = "Add to watchlist"
   if(data.inWatchlist === true) {
    buttonText = "Remove from watchlist"
} 

    return (
        <div className="movieContainer">
            {!data.inWatchlist && <img src = {data.img} alt=""></img>}
            {data.inWatchlist && <ReactPlayer 
            className="react-player"
            url={`https://www.youtube.com/watch?${data.trailer}`}
            height='300px'
            width='400px'/>}
            <h3>{data.title}</h3>
            <h4>Lead Actors: {data.actor}</h4>
            <h4>Film Genre: {data.category}</h4>
            <h4>{data.watched}</h4>
            <h4>User Rating {data.rating}*</h4>
            <button
            className="logBtn" 
            type="button" 
            onClick={() => {
                setMovieWatchlist(data, !data.inWatchlist)
            }}>{buttonText}</button>
            <button 
            className="logBtn" 
            type="button"
            onClick={() => {
                deleteMovie(data, data.title)
            }}>Delete watched</button>
            
        </div>
    )
}
