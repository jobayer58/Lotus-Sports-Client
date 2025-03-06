import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const HomeLayouts = () => {
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