import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from '../Card/MovieCard.jsx';
import './DisplayCards.css';

function DisplayCards({ movies }) {
  return (
    <Container fluid className="display-cards-container">
      <Row className="no-gutters justify-content-center">
        {movies.map(movie => (
          <MovieCard key={movie.id} className="custom-card" movie={movie} />
        ))}
      </Row>
    </Container>
  );
}

export default DisplayCards;
