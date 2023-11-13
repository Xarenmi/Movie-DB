export function getRating(movie){
        const maxStars = 5;
        const rating = Math.floor(movie.vote_average / 2);
    
        const stars = '★★★★★';
        return stars.slice(0, rating).padEnd(maxStars, '☆');
};