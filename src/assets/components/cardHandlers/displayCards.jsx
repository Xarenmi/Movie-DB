import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from '../card/card.jsx';
import './displayCards.css';

function DisplayCards({ latestMovies }) {
  return (
    <Container fluid className="display-cards-container">
      <Row className="no-gutters justify-content-center">
        {latestMovies.map(movie => (
          <MovieCard key={movie.id} className="custom-card" movie={movie} />
        ))}
      </Row>
    </Container>
  );
}

export default DisplayCards;
