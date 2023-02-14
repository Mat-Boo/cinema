import Header from '../components/Header';
import MoviesSearch from '../components/MoviesSearch';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardMovie from '../components/CardMovie';

const Movies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d9814479c0480e74d9f7cdd86face3c5&language=fr-FR`)
        .then((res) => {
            setMovies(res.data.results);
        });
    }, []);

    return (
        <div className='MoviesPage'>
            <Header />
            <MoviesSearch/>
            <ul className='PopularMoviesList'>
                {movies.map((movie) => {
                    return (     
                        <CardMovie key={movie.id} movie={movie}/>
                    )
                })}
                <span className='LoadMoreBtn'>Voir plus</span>
            </ul>
        </div>
    );
};

export default Movies;
