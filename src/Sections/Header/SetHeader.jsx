import { Navbar, Container, FormControl, InputGroup } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import MovieBar from '../../Components/MovieBar/MovieBar.jsx';
import { getLatest } from '../../Assets/db.js';
import './SetHeader.css';
import tmdbLogo from './tmdb_logo.svg';

const SetHeader = ({ onSearch }) => {
    const handleSearch = (searchQuery) => {
        onSearch(searchQuery);
    };
    
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
                        <FormControl placeholder="Search a genre to suggest movies..." onChange={(e) => handleSearch(e.target.value)}/>
                    </InputGroup>
                </Container>
            </Navbar>
            <MovieBar latestMovies={latestMovies} />
        </>
    );
};

export default SetHeader;
