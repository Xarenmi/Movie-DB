import { Navbar, Container, FormControl, InputGroup } from 'react-bootstrap';
import './header.css';
import tmdbLogo from './tmdb_logo.svg';
/* import { FaSearch } from 'react-icons/fa'; */

const SetHeader = () => {
    return (
        <Navbar bg="dark" expand="lg" className='custom-navbar'>
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
                    <FormControl placeholder="Search for movie, genre or release year..." />
                </InputGroup>
            </Container>
        </Navbar>
    );
};

export default SetHeader;
