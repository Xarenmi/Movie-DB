export const getMovieInfo = async (movieId) => {
    console.log(`movieId in getInfo ${movieID}`);
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

/* export const getMovieInfo = async (MOVIE) => {
    let movieId;
    try {
    const movies = await getMovies();
    const selectedMovie = movies[Math.floor(Math.random() * movies.length)];
        movieId = selectedMovie.id;

} catch (error) {
console.error("An error occurred while getting movie information:", error);

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
}; */