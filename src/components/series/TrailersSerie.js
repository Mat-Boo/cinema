import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TrailersSerie = () => {

    const [trailers, setTrailers] = useState([]);
    const params = useParams().id;

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${params}/videos?api_key=d9814479c0480e74d9f7cdd86face3c5&language=fr-FR`)
        .then((res) => {
            setTrailers(res.data.results)
        });
    }, [params]);

    return (
        <>
            {trailers.map((trailer) => {
                return (
                    <li className='TrailerItem'>
                        <h3 className='TrailerName'>{trailer.name}</h3>
                        <iframe src={'https://www.youtube.com/embed/' + trailer.key} className='TrailerVideo'  allow='fullscreen'/>
                    </li>
                )
            })}
        </>
    );
};

export default TrailersSerie;
