import React from 'react';
import { Carousel } from 'react-bootstrap';
import placeHolder from './placeHolder.png'; 
import './carousel.css';

function CoverCarousel({ imgArr }) {
    return (
        <Carousel>
            {imgArr.map((img, index) => (
                <Carousel.Item key={index} style={{ backgroundImage: `url(${img.coverUrl})` }}>
                    <img
                        className="d-block w-100"
                        src={placeHolder}
                        alt={img.name}
                    />
                </Carousel.Item>
            ))}
        </Carousel> 
    );
}

export default CoverCarousel;