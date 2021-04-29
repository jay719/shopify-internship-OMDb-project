import React from 'react'

export default function MovieCard({movie}) {
    console.log(movie)

    return (
        <div className="Mcard"> 
            <h1 classname="Mtitle">{movie.Title}</h1>
            <h2 classname="Mrating">{movie.Rated}</h2>
            <p classname="Mdescription"> {movie.Plot}</p>
            <img classname="Mposter" src={movie.Poster} alt={movie.title} style={ {height: '50px',
  width:'50px'}}/>
            <p>hi</p>
            <buton classname="Nbutton">Nomnate?</buton>
        </div>
    )
}