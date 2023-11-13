import { Container, Row } from 'react-bootstrap';
import MovieCard from '../Card/Card.jsx';
import './MovieBar.css';

export default function MovieBar({latestMovies}) {
    return (
   
        <Container fluid className="display-cards-container">
            <h1 className="now-playing-header">ON THEATERS</h1>
            <Row className="no-gutters justify-content-start flex-nowrap">
                {latestMovies.map(movie => (
                    <MovieCard key={movie.id} className="custom-card" movie={movie} />
                ))}
            </Row>
        </Container>
    );
}