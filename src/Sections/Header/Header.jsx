import { Navbar, Container, FormControl, InputGroup } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import MovieBar from '../../Components/MovieBar/MovieBar.jsx';
import { getLatest } from '../../Assets/db.js';
import './Header.css';
import tmdbLogo from './tmdb_logo.svg';

const SetHeader = () => {
    const [latestMovies, setLatestMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const movies = await getLatest();
                setLatestMovies(movies);
            } catch (error) {
                console.error('Error fetching latest movies:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navbar expand="lg" className="custom-navbar">
                <Container>
                    <Navbar.Brand href="https://www.themoviedb.org">
                        <img
                            src={tmdbLogo}
                            alt="TMDB Logo"
                            width="auto"
                            height="100"
                            className="d-inline-block align-middle"
                        />
                    </Navbar.Brand>
                    <InputGroup className="mx-auto">
                        <FormControl placeholder="Search for movie, genre or release year..." />
                    </InputGroup>
                </Container>
            </Navbar>
            <MovieBar latestMovies={latestMovies} />
        </>
    );
};

export default SetHeader;
