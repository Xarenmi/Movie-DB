import React, { useEffect, useState } from 'react';
import SetHeader from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import MovieBar from '../components/movieBar/movieBar.jsx';
/* import CoverCarousel from '../components/carousel/carousel.jsx'; */
import SetCardsByGenre from '../components/movieGetters/setByGenre.jsx';
import { getLatestCovers } from '../../db/db.js';



export default function Home() {
    const [carouselData, setCarouselData] = useState([]);

    useEffect(() => {
        getLatestCovers()
            .then(covers => {
                setCarouselData(covers);
            })
            .catch(error => {
                console.error("An error occurred loading carousel covers:", error);
            });
    }, []);
    // Empty dependency array ensures this effect runs only once

    return (
        <main>
            <header id="header">
                <SetHeader />
            </header>
            <section id="carousel">
                <MovieBar />
            </section>
            <section id="cards">
                <SetCardsByGenre />
            </section>
            <footer id="footer" className='footer'>
                <Footer />
            </footer>
        </main>
    );
}