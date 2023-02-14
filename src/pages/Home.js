import React from 'react';
import Header from '../components/Header';
import Popular from '../components/Popular';
import TopRated from '../components/TopRated';
import Upcoming from '../components/Upcoming';
import PopularSeries from '../components/series/PopularSeries';
import TopRatedSeries from '../components/series/TopRatedSeries';
import UpcomingSeries from '../components/series/UpcomingSeries';
import MovieHomeHeader from '../components/MovieHomeHeader';

const Home = () => {
    return (
        <div className='Home'>
            <MovieHomeHeader />
            <Header />
            <ul className='SlidersList'>   
                    <li className='SliderItem'>
                        <Popular />
                    </li>
                    <li className='SliderItem'>
                        <TopRated />
                    </li>
                    <li className='SliderItem'>
                        <Upcoming />
                    </li>
                    <li className='SliderItem'>
                        <PopularSeries />
                    </li>
                    <li className='SliderItem'>
                        <TopRatedSeries />
                    </li>
                    <li className='SliderItem'>
                        <UpcomingSeries />
                    </li>
            </ul>
        </div>
    );
};

export default Home;