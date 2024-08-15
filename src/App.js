import React, { useState } from 'react';
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import AddMovieForm from './component/AddMovieForm';
import moviesData from './services/data';
import { Link } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import MovieDetail from './component/MovieDetail';

function App() {
  const [datamovies, setmovies] = useState(moviesData)

  function filter(title){
    setmovies(datamovies.filter(el=>el.title.toLowerCase().includes(title.toLowerCase())))
  }
  function filterrating(rating){
    setmovies(datamovies.filter(el=>el.rating>=rating))
  }
 function addmovie(title,desc,url,ratin){
  setmovies([...datamovies,{id:datamovies.length+1,title:title,description:desc,posterUrl:url,rating:ratin}])
}

  return (
    
    <div>
                <Router>
              <Navbar />
              <Filter  filter={filter}  filterrating={filterrating} />
              <Routes>
                <Route path="/" element={<MovieList data={datamovies} />} />
                <Route path="/movies/:title" element={<MovieDetail movies={datamovies} />} />
                <Route path="/add-movie" element={<AddMovieForm addmovie={addmovie} />} />
              </Routes>
         </Router>


     {/* <MovieList   data={datamovies}  />
     <AddMovieForm  addmovie={addmovie}  /> */}

    </div>
  )
}

export default App;
