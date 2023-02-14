import Header from '../../components/Header';
import SeriesSearch from '../../components/series/SeriesSearch';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardSerie from '../../components/series/CardSerie';

const Series = () => {

    const [series, setSeries] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=d9814479c0480e74d9f7cdd86face3c5&language=fr-FR`)
        .then((res) => {
            setSeries(res.data.results);
        });
    }, []);

    return (
        <div className='SeriesPage'>
            <Header />
            <SeriesSearch />
            <ul className='PopularSeriesList'>
                {series.map((serie) => {
                    return (     
                        <CardSerie key={serie.id} serie={serie}/>
                    )
                })}
                <span className='LoadMoreBtn'>Voir plus</span>
            </ul>
        </div>
    );
};

export default Series;
