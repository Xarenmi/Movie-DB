import { mockMovie } from "./mockMovie.js";

/*COVER*/
const cover = document.getElementById('movie-cover');
cover.querySelector('img').setAttribute('src', `https://image.tmdb.org/t/p/w1280${mockMovie.poster_path}`);

/*INFO AREA*/
const infoArea = document.getElementById('basic-info');

//Name, rating, date and runtime
infoArea.querySelector('h1').innerText = mockMovie.title;
if (mockMovie.adult){
    infoArea.querySelector('.border').textContent = 'R18';
} else {
    infoArea.querySelector('.border').textContent = 'NR';
}

infoArea.querySelector('.date').textContent = (() => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const [year, month, day] = mockMovie.release_date.split('-');
    const monthName = months[parseInt(month, 10) - 1];

    return `${monthName} ${parseInt(day, 10)}, ${year}`;
})();

infoArea.querySelector('.italic').textContent = `${Math.floor(mockMovie.runtime/60)}h ${mockMovie.runtime%60}m`;

//Overview and genres
infoArea.querySelector('#overview').textContent = mockMovie.overview;
const genresArea = infoArea.querySelector('#genres');
genresArea.innerHTML = mockMovie.genres.map((genre)=> {
    return '<div class="genre">' + genre.name + '</div>';
}).join('');

/*CAST*/
const castArea = document.getElementById('cast');
const doubleCoverWidth = cover.offsetWidth;
castArea.style.maxWidth = doubleCoverWidth + 'px';



const castContent = mockMovie.credits.cast.map((actor)=> {
    return '<div class="cast-member">' +
    '<img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2'+ actor.profile_path +'" alt="' + actor.name +'">' +
    '<div class="cast-details">' +
        '<p class="name">' + actor.name + '</p>' +
        '<p class="role">' + actor.character + '</p>' +
    '</div>' + '</div>';
}).join('');

castArea.innerHTML = '<h2>CAST:</h2>' + castContent;

const roleParagraphs = castArea.querySelectorAll('.role');
roleParagraphs.forEach((paragraph) => {
    paragraph.innerHTML = paragraph.innerHTML.replace('/', '<br>');
    paragraph.innerHTML = paragraph.innerHTML.replace(':', '<br>');
    paragraph.innerHTML = paragraph.innerHTML.replace('(', '<br>(');
});

