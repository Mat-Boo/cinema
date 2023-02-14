import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import close from '../ressources/svg/close.svg'
import TrailerHomeHeader from './TrailerHomeHeader';

const MovieHomeHeader = () => {

    const [homeHeaderMovies, setHomeHeaderMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=d9814479c0480e74d9f7cdd86face3c5&language=fr-FR`)
        .then((res) => {
            let nb = Math.floor(Math.random() * (19 - 0 + 1)) + 0;
            setHomeHeaderMovies(res.data.results.slice(nb, nb+1));
        });
    }, []);

    return (
        <>
            {homeHeaderMovies.map((homeHeaderMovie) => {
                return (
                    <div className='MovieHomeHeader' key={homeHeaderMovie.id}>
                        <div className='BackgroundPicture'
                            style=
                            {{
                                backgroundImage: 'url(https://image.tmdb.org/t/p/original/' + homeHeaderMovie.backdrop_path + ')',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '50% 50%',
                                filter: 'opacity(35%)'
                            }}>
                        </div>
                        <div className='MovieHeader'>
                            <div className='MovieDetails'>
                                <h2 className='MovieTitle'>{homeHeaderMovie.title}</h2>
                                <p className='Overview'>{homeHeaderMovie.overview}</p>
                                <div className='BtnBox'>
                                    <NavLink to={'/films/' + homeHeaderMovie.id} className='NavMovieItem'>
                                        <span className='MovieHeaderBtn MoreDetailsBtn'>Plus de détails</span>
                                    </NavLink>
                                    <NavLink to='/' className='NavMovieItem'>
                                        <span className='MovieHeaderBtn BaBtn' onClick={() => {document.querySelector('.TrailerHomeHeaderBox').style.display = 'flex'}}>Bande-annonce</span>
                                    </NavLink>
                                </div>
                                <div className='TrailerHomeHeaderBox'>
                                    <NavLink to='/' className='NavCloseBtn'>
                                        <img src={close} alt='closeBtn' className='CloseBtn' onClick={() => {document.querySelector('.TrailerHomeHeaderBox').style.display = 'none'}}/>
                                    </NavLink>
                                    <TrailerHomeHeader homeHeaderMovie={homeHeaderMovie}/>
                                </div>
                            </div>
                            <img src={'https://image.tmdb.org/t/p/w500/' + homeHeaderMovie.poster_path} alt='coverMovie' className='MoviePoster'/>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default MovieHomeHeader;
