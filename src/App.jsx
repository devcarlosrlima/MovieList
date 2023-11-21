import Header from './Components/Header/Header.jsx';
import { Route, Routes } from "react-router-dom";
import './App.scss'
import Home from './Pages/Home/Home.jsx'
import MovieDetail from './Pages/MovieDetails/MovieDetails.jsx'
import { useState } from 'react';

function App() {

  const [searchValue, setSearchValue] = useState("");


  return (
    <div className='App' style={{backgroundColor: '#303030'}}>
    <Header onSubmit={(inputValue) => setSearchValue(inputValue) }/>
    <Routes>
      <Route path='/' element={<Home searchValueProp={searchValue}/>} />
      <Route path='/movie/:id' element={<MovieDetail/>} />
    </Routes>
    </div>
  )
}

export default App
