import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const HomeLayouts = () => {

    const location = useLocation();

    useEffect(() => {
        const locationSet = location.pathname;
        const locationTitle = locationSet === '/' ? 'Home' : locationSet.split('/')[1];
        document.title = `Lotus Sports | ${locationTitle.charAt(0).toUpperCase() + locationTitle.slice(1)}`;
    }, [location]);

    return (
        <div>
            <section>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default HomeLayouts;