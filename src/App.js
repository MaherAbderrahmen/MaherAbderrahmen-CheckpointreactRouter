import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import MovieList from './components/movielist';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalAdd from './components/Modals';
import FilterByName from './components/filter';
import {moviesData} from './moviesdata';
import { Route, Switch } from 'react-router-dom';
import Moviedetails from './components/moviedetails';





function App() {

  

  const [movies, setMovies] = useState(moviesData)
  const [inputText, setinputText] = useState("");
  const [inputrate, setInputrate] = useState("");

  console.log(movies)

  return (
    <div className="App">
      <Switch>
    
      <Route path="/" 
      exact
      render = {()=> (
<div> 
  <FilterByName inputText={inputText} setinputText={setinputText} setInputrate={setInputrate}/>
  <MovieList movies={movies} inputText={inputText} inputrate={inputrate}/>
      <ModalAdd movies={movies} setMovies={setMovies} />

</div>

      )} />
      
      
      <Route 
      exact
      path="/:id" 
      render={(props) => <Moviedetails {...props} movies={movies} />}
        />
      </Switch>
    </div>
  );
}

export default App;
