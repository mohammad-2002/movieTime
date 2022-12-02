import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Shows from './component/shows';
import Summary from './component/summary';
import Tickets from './component/tickets';

function App() {
  const url = 'https://api.tvmaze.com/search/shows?q=all';
 
  const [shows, setshows] = useState([])
  const getShows = async() =>{
      const response = await fetch(url);
      const data = await response.json();
      setshows(data)
    }
    
    useEffect(() => {
      getShows();
    }, [])

  return (
    <Routes>
      <Route path='/' element={<Shows shows={shows} />}></Route>
      <Route path='/summary/:name' element={<Summary shows={shows} />}></Route>
      <Route path='/summary/tickets' element={<Tickets/>}></Route>
    </Routes>
    );
}

export default App;
