import React, { useEffect, useState } from 'react';
import { getLatest } from '../../../db/db.js';
import { Container, Row } from 'react-bootstrap';
import MovieCard from '../card/card.jsx';
import './movieBar.css';

function MovieBar() {
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
        <Container fluid className="display-cards-container">
                <h1 className="now-playing-header">NOW PLAYING</h1>
            <Row className="no-gutters justify-content-start flex-nowrap">
                {latestMovies.map(movie => (
                    <MovieCard key={movie.id} className="custom-card" movie={movie} />
                ))}
            </Row>
        </Container>
    );
}


export default MovieBar;
