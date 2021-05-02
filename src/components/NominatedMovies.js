import React, { useState } from 'react'

export default function NominatedMovies({movies}) {

    let i = 0
    const [message, setMessage] = useState(true)
    const endMessage = "You have nominated all 5 movies!"

    function renderNominatedMovies(){
        console.log(movies)
 
            return movies.map(movie => {
                return <li key={i +1}>{movie.Title}</li>
                })
            
    
    }
    function renderMessage (){
        if (movies.length < 5) {return ""}
        else {
             {return <p>{endMessage}</p>}
        }
        }

    return (
        <div >
            {renderMessage()}
            <ul className="nominated-movies">
                
            {renderNominatedMovies()}
            </ul>
        </div>
    )
}
