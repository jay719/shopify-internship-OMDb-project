import React from 'react'

export default function MovieCard({movie}) {


    return (
        <div className="Mcard"> 
            <h1 classname="Mtitle">{movie.title}</h1>
            <h2 classname="mrating">{movie.rating}</h2>
            <button classname="Nbutton">Nomnate</button>
            <img src={movie.poster} alt={movie.title} />
        </div>
    )
}
