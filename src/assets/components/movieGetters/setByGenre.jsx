import React, { useEffect, useState } from 'react';
import { getMovies }  from '../../../db/db.js';
import DisplayCards from '../cardHandlers/displayCards.jsx';

function SetCardsByGenre() {
  const [genreMovies, setGenreMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getMovies();
        setGenreMovies(movies);
      } catch (error) {
        console.error('Error fetching latest movies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <DisplayCards latestMovies={genreMovies} />
    </div>
  );
}

export default SetCardsByGenre;
