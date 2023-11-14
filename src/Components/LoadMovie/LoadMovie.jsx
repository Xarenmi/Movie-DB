import { getCover } from "../../Assets/Modules/getCover";
import { mockMovie } from "../../Assets/mockMovie.js";
getCover
import './LoadMovie.css';

export default function LoadMovie({ movie = mockMovie }) {
    function releaseDate() {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const [year, month, day] = movie.release_date.split('-');
        const monthName = months[parseInt(month, 10) - 1];

        return `${monthName} ${parseInt(day, 10)}, ${year}`;
    }

    const setGenres = movie.genres.map((genre) => (
        <div key={genre.id} className="genre">{genre.name}</div>
    ));

    const castWithLineBreaks = movie.credits.cast.map((actor) => ({
        ...actor,
        character: actor.character.replace(/\//g, '<br>').replace(/:/g, '<br>').replace(/\(/g, '<br>('),
    }));

    const setCast = castWithLineBreaks.map((actor) => (
        <div key={actor.id} className="cast-member">
            <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`} alt={actor.name} />
            <div className="cast-details">
                <p className="name">{actor.name}</p>
                <p className="role" dangerouslySetInnerHTML={{ __html: actor.character }} />
            </div>
        </div>
    ));

        const coverImagePath = getCover(movie);
        
        

    return (
        <div id="movie-container">
            <aside id="movie-cover">
                <img src={coverImagePath} alt="Movie Cover" />
            </aside>
            <section id="movie-info">
                <div id="basic-info">
                    <h1>{movie.title}</h1>
                    <p>
                        <span className="border">{movie.adult ? 'R18' : 'NR'}</span>
                        <span className="date">{releaseDate()} </span>
                        -
                        <span className="italic">{`${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`}</span>
                    </p>

                    <p id="overview">
                        {movie.overview}
                    </p>

                    <div id="genres">
                        {setGenres}
                    </div>
                </div>
                <div id="cast">
                    <h2>CAST:</h2>
                    {setCast}
                </div>
            </section>
        </div>
    );
};