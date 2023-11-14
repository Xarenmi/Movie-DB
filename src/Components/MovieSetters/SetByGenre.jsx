import React, { useEffect, useState } from 'react';
import { getMovies } from '../../Assets/db.js';
import DisplayCards from '../CardHandlers/DisplayCards.jsx';
import Filter from '../Filters/Filter.jsx';

function SetCardsByGenre() {
  const [genreMovies, setGenreMovies] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getMovies();
        setGenreMovies(movies);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies by genre:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const filteredMovies = selectedFilter
  ? genreMovies.filter(movie => Math.floor(movie.vote_average / 2) === parseInt(selectedFilter))
  : genreMovies;

  if (loading) {
    return <div>Loading...</div>; // Display a loading message or spinner
  }

  return (
    <div style={{marginTop: '150px', marginBottom: '150px'}}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ color: '#01b4e4', fontFamily: 'Impact', fontSize: '72px', marginLeft: '30px' }}>SUGGESTED MOVIES</h1>
        <Filter onFilterChange={handleFilterChange} selectedFilter={selectedFilter} />
      </div>
      {filteredMovies.length === 0 ? (
        <p>None of the suggested movies fit the selected criteria</p>
      ) : (
        <DisplayCards movies={filteredMovies} />
      )}
    </div>
  );
}

export default SetCardsByGenre;