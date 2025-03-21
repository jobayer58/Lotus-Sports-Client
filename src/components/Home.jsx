import React, { useContext } from 'react';
import BannerSlider from './BannerSlider';
import { AuthContext } from '../provider/AuthProvider';
import HomeProduct from './HomeProduct';
import Service from './Service';
import SportsCategories from './SportsCategories';
import OurReviews from './OurReviews';

const Home = () => {
    const {loading} = useContext(AuthContext)
    if (loading) {
        return <div className='flex min-h-screen justify-center items-center'><span className=" loading loading-bars loading-xl"></span></div>
    }
    return (
        <div>
            <BannerSlider></BannerSlider>
            <HomeProduct></HomeProduct>
            <SportsCategories></SportsCategories>
            <OurReviews></OurReviews>
            <Service></Service>
        </div>
    );
};

export default Home;