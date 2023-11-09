import Card from 'react-bootstrap/Card';
import './card.css';
import { getCover } from '../../../db/db.js';

const getRating = movie => {
    const maxStars = 5;
    const rating = Math.floor(movie.vote_average / 2);

    const stars = '★★★★★';
    return stars.slice(0, rating).padEnd(maxStars, '☆');
};

function MovieCard({ movie }) {
    return (
        <Card className="movie-card">
            <div className="image-overlay">
                <Card.Img variant="top" src={getCover(movie)} />
               <div className="overlay-content">
                    <Card.Title>{movie.original_title}</Card.Title>
                    <Card.Text>
                        {getRating(movie)}
                    </Card.Text>
                </div>
            </div>
        </Card>
    );
}

export default MovieCard;