import React from 'react';
import { NavLink } from 'react-router-dom';

const CardSerie = ({ serie }) => {
    return ( 
            <li key={serie.id} className='CardSerie'>
                <NavLink to={'/series/' + serie.id} className='NavSerieItem'>
                    <img src={'https://image.tmdb.org/t/p/w500/' + serie.poster_path} alt='coverSerie' className='SeriePoster'/>
                    <h3 className='SerieTitle'>{serie.name}</h3>
                </NavLink>
            </li>
    )
};

export default CardSerie;
