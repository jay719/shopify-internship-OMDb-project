
import { useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard.js'
import NominatedMovies from './components/NominatedMovies.js'
import clapping from './images/clapping.gif'

function App() {
  

const [nMovies, setNMovies] = useState([]) 
const [search, setSearch] = useState('')
const [movie, setMovie] = useState('')
// const [visible, setClapVisible] = useState(false)

const clap = () => {
  
  setClapVisible(!visible)
  
}
const nominateMovie = (nomination) => {
  
  setClapVisible(!visible);
  console.log(visible);
  if (nMovies.length < 5) {

    setNMovies(nMovies => nMovies.concat(nomination));
    // setClapVisible(!visible);
    // console.log(visible)
  };
  
}

const searchMovie = () => {
  
    fetch(`https://www.omdbapi.com/?t=${search}&apikey=${apiKey}&type=movie&r=json`)
    .then(response => response.json())
    .then(movie => setMovie(movie))

}

const apiKey = "be23069c"
  return (
   
  <div className="body">
<<<<<<< HEAD
     
    <div className="shade" style={visible ? {}: { display:'none'} }>
      <div className="Dclapping">
        <div className="clappingGif">
          <img   src={clapping} alt="clapping" style={ {height: '40%',
          width:'60%', zIndex: '1000'}}/> 
        </div>
      </div>
    </div> 
    
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
        <img className="Sbutton"src="https://webstockreview.net/images/movie-icon-png.png" alt="search" onClick={searchMovie} />
      {/* <input type="submit" value="Submit" onClick={searchMovie} /> */}
      </div >
=======
    
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
            <img className="Sbutton"src="https://webstockreview.net/images/movie-icon-png.png" alt="search" onClick={searchMovie} />
          {/* <input type="submit" value="Submit" onClick={searchMovie} /> */}
          </div >
>>>>>>> fb00ba8c70ccbe9ccc3a59f9d7aa951ca0112700
        
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

