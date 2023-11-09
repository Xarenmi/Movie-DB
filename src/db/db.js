const tmdbKey = '99c97a7a1724fa3cbd93b7540c481fb5';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const posterBaseUrl = 'https://image.tmdb.org/t/p/w1280';
//Use search button

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

const getCover = movie => {
    return `${posterBaseUrl}${movie.poster_path}`;
}

const getRating = movie => {
    const stars = ['★★★★★'];
    console.log(movie.vote_average);

    switch (true) {
        case movie.voteAverage < 5:
            return stars.slice(0, 2);
        case movie.voteAverage < 7:
            return stars.slice(0, 3);
        case movie.voteAverage < 9:
            return stars.slice(0, 4);
        case movie.voteAverage <= 10:
            return stars;
        default:
            return stars[0];
    }
};

const getGenres = async () => {
    const genreRequestEndpoint = '/genre/movie/list';
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

    try {
        const response = await fetch(urlToFetch, { cache: "no-cache" });
        if (response.ok) {
            const jsonResponse = await response.json();
            const genres = jsonResponse.genres;
            return genres;
        }
    } catch (error) {
        console.log(error);
    }
};

const getMovies = async (/*GENRE*/) => {
    /*for test*/
    /**/const genres = await getGenres();
    /**/const genreObject = genres[Math.floor(Math.random() * genres.length)];
    /**/const selectedGenre = genreObject.id;
    /**/console.log(genreObject.name);
    

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
        /**/
} catch (error) {
    /**/console.error("An error occurred while getting movie information:", error);
        /**/
}

    const movieEndpoint = `/movie/${movieId}`;
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;

    try {
        const response = await fetch(urlToFetch, { cache: "no-cache" });

        if (response.ok) {
            const jsonResponse = await response.json();
            const movieInfo = jsonResponse;
            return movieInfo;
        }
    } catch (error) {
        console.log(error);
    }
};

export { getLatest, getLatestCovers, getCover, getRating, getGenres, getMovies, getMovieInfo };