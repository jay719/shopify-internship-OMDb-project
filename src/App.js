
import { useState } from 'react';
import './App.css';
import MoviesContainer from './components/MoviesContainer';

function App() {
  
const [search, setSearch] = useState('')



  return (
  <div>
      <div className="Header">  
      <label>
          Movies:
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </label>
      <input type="submit" value="Submit" />
    </div>
    <MoviesContainer />
  </div>

    


  );
}

export default App;

