import React from 'react'

export default function MovieCard({movie, nominate}) {
    

    return (
        <div className="Mcard"> 
            <h1 className="Mtitle">{movie.Title}</h1>
            <h2 className="Mrating">{movie.Rated}</h2>
            <p className="Mdescription"> {movie.Plot}</p>
            <img className="Mposter" src={movie.Poster} alt={movie.title} style={ {height: '120px',
  width:'100px'}}/>
            <p></p>
            <button className="Nbutton" onClick={() => nominate(movie)}>Nomnate</button>
        </div>
    )
}