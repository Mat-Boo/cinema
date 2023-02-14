import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrailerHomeHeader = ({homeHeaderMovie}) => {

    const [trailers, setTrailers] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${homeHeaderMovie.id}/videos?api_key=d9814479c0480e74d9f7cdd86face3c5&language=fr-FR`)
        .then((res) => {
            setTrailers(res.data.results.slice(0, 1));
            console.log(res.data.results.slice(0, 1));
        });
    }, [homeHeaderMovie.id]);

    return (
        <>
            {trailers.map((trailer) => {
                return (
                    <div className='TrailerHomeHeaderItem' key={trailer.id}>
                        <iframe src={'https://www.youtube.com/embed/' + trailer.key} className='TrailerHomeHeaderVideo' allow='fullscreen'/>
                    </div>
                )
            })}
        </>
    );
};

export default TrailerHomeHeader;
