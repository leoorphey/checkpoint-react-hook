// Filter.js
import React from 'react';

const Filter = ({ setTitleFilter, setRatingFilter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        min="0"
        max="5"
        onChange={(e) => setRatingFilter(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;
