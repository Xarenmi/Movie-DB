export const filterRating = (movie, selectedFilter) => {
    selectedFilter
        ? genreMovies.filter(movie => Math.floor(movie.vote_average / 2) == selectedFilter.value)
        : genreMovies;
}