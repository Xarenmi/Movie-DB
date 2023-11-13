import SetHeader from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import SetCardsByGenre from '../../Components/MovieSetters/SetByGenre.jsx';

export default function Home() {

    return (
        <main>
            <header>
            <SetHeader />
            </header>
            <section id="display">
                <SetCardsByGenre />
            </section>
            <footer id="footer" className='footer'>
                <Footer />
            </footer>
        </main>
    );
}