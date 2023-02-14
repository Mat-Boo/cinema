import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardSerie from './CardSerie';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
SwiperCore.use([Navigation]);

const PopularSeries = () => {

    const [series, setSeries] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=d9814479c0480e74d9f7cdd86face3c5&language=fr-FR`)
        .then((res) => {
            setSeries(res.data.results);
        });
    }, []);

    return (
        <div className='PopularSeriesBox'>
            <div className='HeaderSlider'>
                <h2>Séries Populaires</h2>
                <span className='ShowMoreBtn'>Voir plus</span>
            </div>
            <ul className='PopularSeriesList'>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={'auto'}
                    navigation={true}
                    className="mySwiper"
                >
                {series.map((serie) => {
                    return (             
                        <SwiperSlide key={serie.id}> 
                            <CardSerie serie={serie}/>
                        </SwiperSlide>  
                    )
                })}
                </Swiper>
            </ul>
        </div>
    )
};

export default PopularSeries;
