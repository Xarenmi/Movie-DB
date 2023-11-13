import { getGenres } from './Modules/getGenres.js';
import { tmdbKey, tmdbBaseUrl } from './Modules/dataKeys.js';

const getLatest = async () => {
    const latestRequestEndpoint = '/movie/now_playing';
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = `${tmdbBaseUrl}${latestRequestEndpoint}${requestParams}`;
    try {
        const response = await fetch(urlToFetch, { cache: "no-cache" });
        if (response.ok) {
            const jsonResponse = await response.json();
            const nowPlaying = jsonResponse.results;
            return nowPlaying;
        }
    } catch (error) {
        console.log(error);
    }
}

const getLatestCovers = async () => {

    const latest = await getLatest();
    const latestFive = latest.slice(0, 5);
    const coversArr = latestFive.map(movie => ({
        name: movie.original_title,
        coverUrl: `${posterBaseUrl}${movie.poster_path}`,
    }));

    return coversArr;
}

const getMovies = async (/*GENRE*/) => {
    /*for test*/
    /**/const genres = await getGenres();
    /**/const genreObject = genres[Math.floor(Math.random() * genres.length)];
    /**/const selectedGenre = genreObject.id;
    
    const discoverMovieEndpoint = '/discover/movie';
    const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
    const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;

    try {
        const response = await fetch(urlToFetch, { cache: "no-cache" });

        if (response.ok) {
            const jsonResponse = await response.json();
            const movies = jsonResponse.results;
            
            return movies;
        }
    } catch (error) {
        console.log(error);
    }
};

const getMovieInfo = async () => {
    let movieId = 507089;

    const movieEndpoint = `/movie/${movieId}`;
    const requestParams = `?api_key=${tmdbKey}&append_to_response=credits`;
    const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;

    try {
        const response = await fetch(urlToFetch, { cache: "no-cache" });

        if (response.ok) {
            const jsonResponse = await response.json();
            const movieInfo = jsonResponse;
            /**/console.log('Peli en DB', movieInfo);
            return movieInfo;
        }
    } catch (error) {
        console.log(error);
    }
}

const movie = getMovieInfo();
export { getLatest, getLatestCovers, getMovies, movie };