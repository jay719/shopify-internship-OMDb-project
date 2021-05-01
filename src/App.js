
import { useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard.js'

function App() {
  
const [search, setSearch] = useState('')
const [movie, setMovie] = useState('')
  

const searchMovie = () => {
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
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          </label>
        <input type="submit" value="Submit" onClick={searchMovie()} />
      </div>
      <div className="Mcontainer">
        <MovieCard movie={movie} />
      </div>
    </div>
  </div>

    


  );

  
}

export default App;

