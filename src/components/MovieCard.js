import React from 'react'

export default function MovieCard({movie}) {


    return (
        <div className="Mcard"> 
            <h1 classname="Mtitle" >{movie.title}</h1>
            <h2 classname="Mrating" >{movie.rating}</h2>
            <p classname="Mdescription" > {movie.plot}</p>
            <button classname="Nbutton" >Nomnate?</button>
            <img classname="Mposter" src={movie.poster} alt={movie.title} />
        </div>
    )
}