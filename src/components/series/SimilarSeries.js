import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CardSerie from '../series/CardSerie';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
SwiperCore.use([Navigation]);

const SimilarSeries = () => {

    const [series, setSeries] = useState([]);
    const params = useParams().id;

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${params}/similar?api_key=d9814479c0480e74d9f7cdd86face3c5&language=fr-FR`)
        .then((res) => {
            setSeries(res.data.results);
        });
    }, [params]);

    return (
        <div className='SimilarSeriesBox'>
            <div className='HeaderSlider'>
                <h2>Séries similaires</h2>
                <span className='ShowMoreBtn'>Voir plus</span>
            </div>
            <ul className='SimilarSeriesList'>
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

export default SimilarSeries;
