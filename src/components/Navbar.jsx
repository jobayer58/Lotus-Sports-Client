import React from 'react';
import logo from '../assets/Lotus_Esports_29logo_square.webp'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const links = <>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/explore'>EXPLORE GEARS</NavLink>
        <NavLink to='/addEquipment'>ADD EQUIPMENT</NavLink>
        <NavLink to='/collection'>MY COLLECTION</NavLink>
    </>

    return (
        <div >
            <div className="">
                <div className="navbar flex justify-around items-center py-4">
                    <div className="flex justify-center items-center ">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="md:h-9 md:w-9 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 gap-5 py-4 shadow">
                                {links}
                            </ul>
                        </div>
                        <div className="flex justify-center items-center">
                            <img className="h-24 w-24 object-cover" src={logo} alt="" />

                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal gap-7 text-xl ">
                            {links}
                        </ul>
                    </div>
                    <div className="">
                        <div className="flex justify-center items-center md:gap-4 gap-1">
                            <NavLink to='/auth/login' className="btn px-8 py-6 text-[20px]">LOGIN</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;