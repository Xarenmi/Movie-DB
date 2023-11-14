import React, { useState } from 'react';
import SetHeader from '../Header/SetHeader.jsx';
import Footer from '../Footer/Footer.jsx';
import SetCardsByGenre from '../../Components/MovieSetters/SetByGenre.jsx';

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <main>
            <header>
            <SetHeader onSearch={handleSearch}/>
            </header>
            <section id="display">
                <SetCardsByGenre searchQuery={searchQuery}/>
            </section>
            <footer id="footer" className='footer'>
                <Footer />
            </footer>
        </main>
    );
}