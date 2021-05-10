
import { useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard.js'
import NominatedMovies from './components/NominatedMovies.js'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

function App() {
  
const { width, height } = useWindowSize()
const [nMovies, setNMovies] = useState([]) 
const [search, setSearch] = useState('')
const [movie, setMovie] = useState('')
const [visible, setConfettiVisible] = useState(true)

const nominateMovie = (nomination) => {
  if (nMovies.length < 5) {setNMovies(nMovies => nMovies.concat(nomination))}
    else {setConfettiVisible(!visible)}
}

const searchMovie = () => {
  console.log('done')
    fetch(`https://www.omdbapi.com/?t=${search}&apikey=${apiKey}&type=movie&r=json`)
    .then(response => response.json())
    .then(movie => setMovie(movie))
}

const apiKey = "be23069c"

  return (
    <div className="body">
      {visible ? null :
        <Confetti
          width={width}
          height={height}
          recycle='false'
      /> 
    }
    <div className="Search">  
      <label className="label">
          The Shoppies
          <input 
          className="Sbar"
          type="text" 
          value={search} 
          onChange={(e) => {
              setSearch(e.target.value); 
              {searchMovie()}
                } 
              }
            />
      </label>
      <img className="Sbutton" src="https://webstockreview.net/images/movie-icon-png.png" alt="search" onClick={searchMovie} />
      </div >
    <div className="cards">
      <div className="Mcontainer">
        <MovieCard movie={movie} nominate={nominateMovie}/>
      </div>
      <div className="Ncontainer">
        <NominatedMovies nominations={nMovies} />
      </div>
    </div>
      
  </div>
  
    
  

  );

  
}

export default App;

