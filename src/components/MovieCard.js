// MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <img src={movie.posterURL} alt={movie.title} width="200" />
        <h2>{movie.title}</h2>
        <p>{movie.description.slice(0, 60)}...</p>
        <strong>Rating: {movie.rating}/5</strong>
      </Link>
    </div>
  );
};

export default MovieCard;
