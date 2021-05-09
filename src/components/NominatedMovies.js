import { cleanup } from '@testing-library/react'
import React, { useState } from 'react'


export default function NominatedMovies({nominations}) {
    let i = 0
    const restart = () => {
        
    }
    const endMessage = `You have nominated all 5 movies!${restart}`
    const renderNominatedMovies = () => { 
            return nominations.map(nomination=> {
                return <div>
                    <li key={i +1}>
                        {nomination.movie.Title} 
                        <p>Nominated Rating: {nomination.rating}🌟</p>
                        <p> Personal Review:{nomination.review}</p>
                    </li>
                </div>
                }
            )
        }
    const renderMessage = () => {
        if (nominations.length < 5) {return ""}
            else {
            {return <p>{endMessage}</p>}
            }
        }
    return (
        <div className="nominations">
            <h1 className="Ntitle">Nominations</h1>
            {renderMessage()}
            <ul className="nominated-movies">
            {renderNominatedMovies()}
            </ul>
        </div>
    )
}
