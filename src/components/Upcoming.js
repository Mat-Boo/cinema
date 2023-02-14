import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardMovie from './CardMovie';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
SwiperCore.use([Navigation]);

const Upcoming = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=d9814479c0480e74d9f7cdd86face3c5&language=fr-FR`)
        .then((res) => {
            setMovies(res.data.results);
        });
    }, []);

    return (
        <div className='UpcomingMoviesBox'>
            <div className='HeaderSlider'>
                <h2>Films - Prochaines sorties</h2>
                <span className='ShowMoreBtn'>Voir plus</span>
            </div>
            <ul className='UpcomingMoviesList'>
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

export default Upcoming;
