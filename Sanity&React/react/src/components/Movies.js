import React, { useEffect } from "react";
import { useState } from 'react';
import { getMovies } from "../utils/movieService";
import Movie from './Movie';

const Movies = (name, actor) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
       const fetchDataAsync = async() => {
            const data = await getMovies();
            setMovies(data);
       }
       fetchDataAsync();
    }, []);

    return(
        <>
        <h2>Movies</h2>
        <div class ="container">
            {movies?.length > 0 && movies.map((movie) => 
                <Movie key={movie._id} name={movie.name} actor={movie.actor}/>)}
        </div>
        </>
    );
}

export default Movies;