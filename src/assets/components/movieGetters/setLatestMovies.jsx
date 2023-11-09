import React, { useEffect, useState } from 'react';
import { getLatest } from '../../../db/db.js';
import DisplayCards from '../cardHandlers/displayCards.jsx';

function SetCards() {
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getLatest();
        console.log(movies);
        setLatestMovies(movies);
      } catch (error) {
        console.error('Error fetching latest movies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <DisplayCards latestMovies={latestMovies} />
    </div>
  );
}

export default SetCards;
