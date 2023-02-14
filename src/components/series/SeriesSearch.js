import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardSerie from './CardSerie';

const SeriesSearch = () => {

    const [series, setSeries] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=d9814479c0480e74d9f7cdd86face3c5&language=fr-FR&query=${searchValue}`)
        .then((res) => {
            setSeries(res.data.results);
        });
    }, [searchValue]);
    
    return (
        <div className='SeriesBox'>
            <input id='search' name='search' placeholder='Rechercher...' className='SearchInput' onChange={(e) => setSearchValue(e.target.value)} />
            <div className='Series'>
                {<ul className='SeriesList'>
                    {series.map((serie) => {
                        return (
                            <CardSerie key={serie.id} serie={serie}/>
                        )
                    })}
                </ul>}
            </div>
        </div>
    )
};

export default SeriesSearch;
