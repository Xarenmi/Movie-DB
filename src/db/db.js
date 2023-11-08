const tmdbKey = '99c97a7a1724fa3cbd93b7540c481fb5';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const posterBaseUrl = 'https://image.tmdb.org/t/p/w1280';
//get search button

const getLatest = async () => {
    const latestRequestEndpoint = '/movie/now_playing';
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = `${tmdbBaseUrl}${latestRequestEndpoint}${requestParams}`;
    try {
        const response = await fetch(urlToFetch, { cache: "no-cache" });
        if (response.ok) {
            const jsonResponse = await response.json();
            const nowPlaying = jsonResponse;
            return nowPlaying;
        }
    } catch (error) {
        console.log(error);
    }
}

const getGenres = async () => {
    const genreRequestEndpoint = '/genre/movie/list';
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

    try {
        const response = await fetch(urlToFetch, { cache: "no-cache" });
        if (response.ok) {
            const jsonResponse = await response.json();
            const genres = jsonResponse/* .genres */;
            return genres;
        }
    } catch (error) {
        console.log(error);
    }
};

const getMovies = async (/*GENRE*/) => {
    /*for test*/
    /**/const genres = getGenres();
    /**/const selectedGenre = genres[Math.floor(Math.random() * genres.length)];

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
getMovies();

const getMovieInfo = async (/*MOVIE*/) => {
    let movieId;
    /*for test*/
    /**/try {
    /**/const movies = await getMovies();
    /**/const selectedMovie = movies[Math.floor(Math.random() * movies.length)];
        movieId = selectedMovie.id;
    /**/} catch (error) {
    /**/console.error("An error occurred while getting movie information:", error);
    /**/}

    const movieEndpoint = `/movie/${movieId}`;
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;

    try {
        const response = await fetch(urlToFetch, { cache: "no-cache" });

        if (response.ok) {
            const jsonResponse = await response.json();
            const movieInfo = jsonResponse;
            console.log(movieInfo)
            return movieInfo;
        }
    } catch (error) {
        console.log(error);
    }
};