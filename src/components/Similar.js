import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CardMovie from './CardMovie';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
SwiperCore.use([Navigation]);

const Similar = () => {

    const [movies, setMovies] = useState([]);
    const params = useParams().id;

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params}/similar?api_key=d9814479c0480e74d9f7cdd86face3c5&language=fr-FR`)
        .then((res) => {
            setMovies(res.data.results);
        });
    }, [params]);

    return (
        <div className='SimilarMoviesBox'>
            <div className='HeaderSlider'>
                <h2>Films similaires</h2>
                <span className='ShowMoreBtn'>Voir plus</span>
            </div>
            <ul className='SimilarMoviesList'>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={'auto'}
                    navigation={true}
                    className="mySwiper"
                >
                {movies.map((movie) => {
                    return (     
                        <SwiperSlide key={movie.id}>         
                            <CardMovie movie={movie}/>
                        </SwiperSlide>
                    )
                })}
                </Swiper>
            </ul>
        </div>
    )
};

export default Similar;
