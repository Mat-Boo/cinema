import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Credits from '../components/Credits';
import Trailers from '../components/Trailers';
import Similar from '../components/Similar';

const MovieDetails = () => {

    const [movie, setMovie] = useState([]);
    const params = useParams().id;

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params}?api_key=d9814479c0480e74d9f7cdd86face3c5&language=fr-FR`)
        .then((res) => {
            setMovie(res.data);
        });
    }, [params]);

    return (
        <>
            <div className='MovieDetailsPageBg' 
                style=
                    {{
                        backgroundImage: 'url(https://image.tmdb.org/t/p/original/' + movie.backdrop_path + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '50% 50%',
                        filter: 'opacity(35%)'
                    }}>
            </div>            
            <div className='MovieDetailsPage' >
                <Header/>
                <div className='MovieDetails'>
                    <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt='coverMovie' className='MoviePoster'/>
                    <div className='DetailsBox'>
                        <div>
                            <h2 className='MovieTitle'>{movie.title}</h2>
                            <span className='DateReleased'>{'Sorti le ' + (new Date(Date.parse(movie.release_date))).toLocaleDateString('FR-fr')}</span>
                        </div>
{/*                         <ul className='GenresList'>
                            {movie.genres.map((genre) => {
                                return (
                                    <li key={genre.id} className='GenreItem'>
                                        {genre.name}
                                    </li>
                                )
                            })}
                        </ul> */}
                        <p>{movie.overview}</p>
                        <div className='CastingBox'>
                            <h3 className='CastingTitle'>Casting</h3>
                            <ul className='CastingList'>
                                <Credits/>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul className='TrailersList'>
                    <Trailers />
                </ul>
                <Similar />
            </div>
        </>
    )
};

export default MovieDetails;
