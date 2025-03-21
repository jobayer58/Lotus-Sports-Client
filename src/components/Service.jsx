import React, { useContext } from 'react';
import car from '../assets/icon1_120x.png'
import call from '../assets/icon2_120x.png'
import time from '../assets/icon3_120x.png'
import diamond from '../assets/icon4_120x.png'
import { AuthContext } from '../provider/AuthProvider';

const Service = () => {
    const { theme } = useContext(AuthContext)
    return (
        <div>
            <h1 className={`text-center font-semibold text-3xl py-6 ${theme === "dark" ? 'bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] bg-clip-text text-transparent' : " text-black" }`}>Our Service Policy</h1>
            <div className={` ${theme !== "dark" && "bg-[#E8E7E3]"}`}>
                <div className='lg:flex md:grid md:grid-cols-2 md:space-y-3 items-center justify-around py-14 px-8 lg:space-y-0 space-y-5'>
                    <div className='flex justify-center items-center gap-5'>
                        <img className='h-12 w-12 object-cover transition-transform duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1' src={car} alt="" />
                        <div className="w-[1px] bg-gray-400 h-16"></div>
                        <div>
                            <h1 className='font-bold'>Free Shipping</h1>
                            <p className='text-sm'>Free shipping on all US order or <span className='hidden lg:inline'><br /></span> order above TK: 2000</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-5'>
                        <img className='h-12 w-12 object-cover transition-transform duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1' src={call} alt="" />
                        <div className="w-[1px] bg-gray-400 h-16"></div>
                        <div>
                            <h1 className='font-bold'>Online Support 24/7</h1>
                            <p className='text-sm'>Get 24/7 live support via <span className='hidden lg:inline'><br /></span> chat and call!</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-5'>
                        <img className='h-12 w-12 object-cover transition-transform duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1' src={time} alt="" />
                        <div className="w-[1px] bg-gray-400 h-16"></div>
                        <div>
                            <h1 className='font-bold'>7 Days Return</h1>
                            <p className='text-sm'>Hassle-free returns or <span className='hidden lg:inline'><br /></span> exchanges within 7 days!</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-5'>
                        <img className='h-12 w-12 object-cover transition-transform duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1' src={diamond} alt="" />
                        <div className="w-[1px] bg-gray-400 h-16"></div>
                        <div>
                            <h1 className='font-bold'>Payment Secure</h1>
                            <p className='text-sm'>Secure payments with SSL encryption <span className='hidden lg:inline'><br /></span> and fraud protection!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;