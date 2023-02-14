import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import CreditsSerie from '../../components/series/CreditsSerie';
import TrailersSerie from '../../components/series/TrailersSerie'
import SimilarSeries from '../../components/series/SimilarSeries';

const SerieDetails = () => {

    const [serie, setSerie] = useState([]);
    const params = useParams().id;

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${params}?api_key=d9814479c0480e74d9f7cdd86face3c5&language=fr-FR`)
        .then((res) => {
            setSerie(res.data);
        });
    }, [params]);

    return (
        <>
            <div className='SerieDetailsPageBg' 
                style=
                    {{
                        backgroundImage: 'url(https://image.tmdb.org/t/p/original/' + serie.backdrop_path + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '50% 50%',
                        filter: 'opacity(35%)'
                    }}>
            </div>            
            <div className='SerieDetailsPage' >
                <Header/>
                <div className='SerieDetails'>
                    <img src={'https://image.tmdb.org/t/p/w500/' + serie.poster_path} alt='coverSerie' className='SeriePoster'/>
                    <div className='DetailsBox'>
                        <div>
                            <h2 className='SerieTitle'>{serie.name}</h2>
                            <span className='DateReleased'>{'Sortie le ' + (new Date(Date.parse(serie.first_air_date))).toLocaleDateString('FR-fr')}</span>
                        </div>
{/*                         <ul className='GenresList'>
                            {serie.genres.map((genre) => {
                                return (
                                    <li key={genre.id} className='GenreItem'>
                                        {genre.name}
                                    </li>
                                )
                            })}
                        </ul> */}
                        <p>{serie.overview}</p>
                        <div className='CastingBox'>
                            <h3 className='CastingTitle'>Casting</h3>
                            <ul className='CastingList'>
                                <CreditsSerie/>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul className='TrailersList'>
                    <TrailersSerie />
                </ul>
                <SimilarSeries />
            </div>
        </>
    )
};

export default SerieDetails;
