
import { useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard.js'
import NominatedMovies from './components/NominatedMovies.js'

function App() {
  

const [nMovies, setNMovies] = useState([]) 
const [search, setSearch] = useState('')
const [movie, setMovie] = useState('')

const nominateMovie = (movie) => {
  console.log("done")
  if (nMovies.length < 5) {setNMovies(nMovies => nMovies.concat(movie))}
}

const searchMovie = () => {
  console.log('done')
    fetch(`https://www.omdbapi.com/?t=${search}&apikey=${apiKey}&type=movie&r=json`)
    .then(response => response.json())
    .then(movie => setMovie(movie))

}

const apiKey = "be23069c"
  return (
   
  <div>
    <div className="Search">    
        <div className="Header">  
        <label className="label">
            Movie:
            <input 
            type="text" 
            value={search} 
            onChange={(e) => {
              setSearch(e.target.value); 
              {searchMovie()}
                } 
              }
              />
          </label>
        <input type="submit" value="Submit" onClick={searchMovie} />
      </div>
      <div className="Mcontainer">
        <MovieCard movie={movie} nominate={nominateMovie}/>
        
      </div>
      <NominatedMovies movies={nMovies} />
      
    </div>
  </div>
  
    
  

  );

  
}

export default App;

