import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CreditsSerie = () => {

    const [casting, setCasting] = useState([]);
    const params = useParams().id;

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${params}/credits?api_key=d9814479c0480e74d9f7cdd86face3c5&language=fr-FR`)
        .then((res) => {
            setCasting(res.data.cast);
        });
    }, [params]);
    
    return(
        <>
            {casting.slice(0, 5).map((cast) => {
                return (
                    <li className='CastListItem'>
                        <img src={'https://image.tmdb.org/t/p/w500/' + cast.profile_path} alt={'image-' + cast.name} className='CastPicture'/>
                        <span className='CastName'>{cast.name}</span>
                    </li>
                )
            })}
        </>
    )
};

export default CreditsSerie;
