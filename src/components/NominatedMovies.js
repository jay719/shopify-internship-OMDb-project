import React, { useState } from 'react'

export default function NominatedMovies({nominations}) {

    let i = 0
    const [message, setMessage] = useState(true)
    const endMessage = "You have nominated all 5 movies!"

    function renderNominatedMovies(){ 
            return nominations.map(nomination=> {
                return <li key={i +1}>{nomination.movie.Title}</li>
                })
            
    
    }
    function renderMessage (){
        if (nominations.length < 5) {return ""}
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
