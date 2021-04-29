
import { useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard.js'

function App() {
  
const [search, setSearch] = useState('')
const [movie, setMovie] = useState('')
    
const searchMovie = () => {
    fetch(`http://www.omdbapi.com/?t=${search}&apikey=be23069c&type=movie&r=json`)
    .then(response => response.json())
    .then(movie => setMovie(movie))

}


  return (
  <div>
      <div classname="Header">  
      <label>
          Movies:
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </label>
      <input type="submit" value="Submit" onClick={searchMovie} />
    </div>
    <div classname="Mcontainer">
      <MovieCard movie={movie} />
    </div>
  </div>

    


  );
}

export default App;

