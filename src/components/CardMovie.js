import React from 'react';
import { NavLink } from 'react-router-dom';

const CardMovie = ({ movie }) => {
    return ( 
            <li key={movie.id} className='CardMovie'>
                <NavLink to={'/films/' + movie.id} className='NavMovieItem'>
                    <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt='coverMovie' className='MoviePoster'/>
                    <h3 className='MovieTitle'>{movie.title}</h3>
                </NavLink>
            </li>
    )
};

export default CardMovie;
