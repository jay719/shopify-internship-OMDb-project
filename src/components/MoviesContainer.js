import React, { useEffect } from 'react';
import MovieCard from './MovieCard'

export default function MoviesContainer() {

    useEffect(() => {
        fetch()
    }, [])    

    const showMovies = () => {
        
    }
    return (
        <div classsName="Mcontainers">
            {showMovies}
        </div>
    )
}
