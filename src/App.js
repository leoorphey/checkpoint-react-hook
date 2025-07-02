// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieDetails from './components/MovieDetails';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      posterURL: ' https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/72/34/14/19476654.jpg',
      rating: 5,
      trailer: 'https://www.youtube.com/embed/8hP9D6kZseM'
    },
    {
      id: 2,
      title: 'The Matrix',
      description: 'What is real? Dive into the Matrix.',
      posterURL: 'https://m.media-amazon.com/images/I/51EG732BV3L.jpg',
      rating: 4,
      trailer: 'https://www.youtube.com/embed/vKQi3bBA1y8'
    }
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const addMovie = (movie) => {
    const newMovie = { ...movie, id: movies.length + 1 };
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <Router>
      <div style={{ padding: 20 }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>🎬 Movie App</h1>
                <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />
                <AddMovie onAdd={addMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
