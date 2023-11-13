import { useEffect, useState } from "react";
import { getMovieInfo } from "../../Assets/Modules/getMovieInfo.js";
import { getRating } from '../../Assets/Modules/getRating.js';
import { getCover } from "../../Assets/Modules/getCover.js";

function DisplayMovie( /* movie */ ) {
   /*  let selectedMovie = movie.id; */


    const stars = getRating(selectedMovie);
    const runtime = `${Math.floor(movieInfo.runtime/60)}:${movieInfo.runtime%60}`;

    return (
        <> {/*
        //container
        <section >
            <aside id="movie-cover">

            </aside>
            <section id="movie-info">
            <h1>{selectedMovie.title}</h1>
            //Inline: <p id="release-date"><span style={color='orange'}>{selectedMovie.release_date}</span> {selectedMovie.runtime}-  </p>

            </section>
        </section>
        
        <h2>{stars}</h2>
        <img src={getCover(movie)}/>
        <h3>{`Release date: ${selectedMovie.release_date}`}</h3>
        <hr/>
        <p>{selectedMovie.overview}</p>
           

genre_ids: Array [ 28, 18 ]

        */}
        </>
    );
};

export default DisplayMovie;