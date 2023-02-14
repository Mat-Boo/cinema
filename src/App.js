import {BrowserRouter, Routes, Route } from 'react-router-dom';
/* import Header from './components/Header'; */
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/series/Series';
/* import NotFound from './pages/NotFound'; */
import MovieDetails from './pages/MovieDetails';
import SerieDetails from './pages/series/SerieDetails';

function App() {
  return (
    <div className="App" rol={(e) => {console.log(e)}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/films' element={<Movies />} />
          <Route path='/films/:id' element={<MovieDetails />} />
          <Route path='/series' element={<Series />} />
          <Route path='/series/:id' element={<SerieDetails />} />
{/*           <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
