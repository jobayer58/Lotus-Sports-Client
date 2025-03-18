import React, { useContext} from 'react';
import logo from '../assets/Lotus_Esports_29logo_square.webp'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
    const { user, logOut,theme, setTheme } = useContext(AuthContext)
    

    const links = <>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/explore'>EXPLORE GEARS</NavLink>
        <NavLink to='/addEquipment'>ADD EQUIPMENT</NavLink>
        <NavLink to='/myCollection'>MY COLLECTION</NavLink>
    </>

    return (
        <div >
            <div className="">
                <div className="navbar flex justify-around items-center">
                    <div className="flex justify-center items-center md:gap-16 gap-4">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="lg:hidden ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="md:h-9 md:w-9 h-7 w-7 "
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
                            <img className="md:h-24 md:w-24 h-16 w-16 object-cover" src={logo} alt="" />

                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal gap-7 text-xl font-sans ">
                            {links}
                        </ul>
                    </div>
                    <div className="">
                        <div className="flex justify-center items-center md:gap-4 gap-1">
                            {
                                user?.email && <div><img data-tooltip-id="logo-img-tooltip" className="md:w-14 md:h-14 w-10 h-10 rounded-full object-cover" src={user?.photoURL} alt="" />
                                    <Tooltip id="logo-img-tooltip" place="left" effect="solid">
                                        {
                                            user?.displayName
                                        }
                                    </Tooltip>
                                </div>

                            }
                            {
                                user && user?.email ? <button onClick={logOut} className={`bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] btn md:px-8 px-2  md:py-6 py-1 md:text-[20px] ${theme === "dark" && " text-black" }`}>LOGOUT</button> : <NavLink to='login' className={`bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] btn md:px-8 px-2 md:py-6 py-2 md:text-[20px] ${theme === "dark" && " text-black" }`}>LOGIN</NavLink>
                            }
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="toggle theme-controller"
                                    checked={theme === "dark"}
                                    onChange={() => setTheme(theme === "light" ? "dark" : "light")}
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;