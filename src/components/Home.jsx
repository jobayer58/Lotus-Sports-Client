import React, { useContext } from 'react';
import BannerSlider from './BannerSlider';
import { AuthContext } from '../provider/AuthProvider';

const Home = () => {
    const {loading} = useContext(AuthContext)
    if (loading) {
        return <div className='flex min-h-screen justify-center items-center'><span className=" loading loading-bars loading-xl"></span></div>
    }
    return (
        <div>
            <BannerSlider></BannerSlider>

        </div>
    );
};

export default Home;