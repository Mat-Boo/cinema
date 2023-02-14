import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardMovie from './CardMovie';

const MoviesSearch = () => {

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d9814479c0480e74d9f7cdd86face3c5&language=fr-FR&query=${searchValue}`)
        .then((res) => {
            setMovies(res.data.results);
        });
    }, [searchValue]);
    return (
        <div className='MovieBox'>
            <input id='search' name='search' placeholder='Rechercher...' className='SearchInput' onChange={(e) => setSearchValue(e.target.value)} />
            <div className='Movies'>
                {<ul className='MoviesList'>
                    {movies.map((movie) => {
                        return (
                            <CardMovie key={movie.id} movie={movie}/>
                        )
                    })}
                </ul>}
            </div>
        </div>
    )
};

export default MoviesSearch;
