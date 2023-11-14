import React from 'react';
/* import { Link } from 'react-router-dom'; */
import Card from 'react-bootstrap/Card';
/* import DisplayMovie from '../MovieSetters/DisplayMovie.jsx'; */
import { getRating } from '../../Assets/Modules/getRating.js';
import './Card.css';
import { getCover } from '../../Assets/Modules/getCover.js';

function MovieCard({ movie }) {
    const stars = getRating(movie);

    return (
      /*  <Link to={`/movies/${movie.id}`} className="movie-card-link"> */
            <Card className="movie-card">
                <div className="image-overlay">
                    <Card.Img variant="top" src={getCover(movie)} />
                    <div className="overlay-content">
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            {stars}
                        </Card.Text>
                    </div>
                </div>
            </Card>
      /*   </Link> */
    );
}

export default MovieCard;