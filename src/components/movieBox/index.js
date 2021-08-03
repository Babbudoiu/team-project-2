import React from 'react'

export const MovieBox = ({title, actor, category, watched, rating}) => {

    return (
        <div className="movies">
            <h3>{title}</h3>
            <h5>{actor}<h5>
            </h5>{category}</h5>
            <h4>{watched}</h4>
            <h4>{rating}</h4>
        </div>
    )
}
