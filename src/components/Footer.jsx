import React from 'react';
import logo from '../assets/Lotus_Esports_29logo_square.webp'
import fb from '../assets/fb-48.png'
import ins from '../assets/instagram-48.png'
import tw from '../assets/twitter-48.png'
import yt from '../assets/youtube-48.png'

const Footer = () => {
    return (
        // bg-[#222222] bg-[#272727]
        <div className='bg-[#000000]  text-[#ffffff] '>
            <div>
                {/* upper text */}
                <div className='py-10 text-center'>
                    <div className='space-y-7'>
                        <h1 className='text-4xl font-semibold text-[#ffffff]'>Let's Get Started</h1>
                        <p className='text-[#AEAEAE]'>Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <p className='text-[#AEAEAE]'>Email can't be blank.</p>
                    </div>
                    <div className='flex justify-center mt-2' >
                        <input className='py-[10px] lg:px-96  lg:pl-5 pl-2 border' type="email" placeholder='Enter your Email' id="" />
                        <button className=' bg-[#ffffff] text-[#000000]  font-semibold py-[10px] lg:px-5 px-3'>SUBSCRIBE</button>
                    </div>
                    <div className='flex justify-center mt-4 gap-3'>
                        <img src={fb} alt="" />
                        <img src={ins} alt="" />
                        <img src={tw} alt="" />
                        <img src={yt} alt="" />
                    </div>

                </div>
                {/* bottom  text */}
                <div className='lg:flex lg:justify-around items-start py-10'>
                    {/* 1 */}
                    <div className='flex flex-col items-center'>
                        <img src={logo} className='h-20 w-20 rounded-full object-cover ' alt="" />
                        <p className='text-[#AEAEAE] text-center'>A great about us block helps builds trust between you and your customers. The more <span className='hidden md:inline'><br /></span> content you provide about you and your business, the more confident people will be when <span className='hidden md:inline'><br /></span> purchasing from your store.</p>
                    </div>
                    {/* 2 */}
                    {/* lg show */}
                    <div className='md:flex gap-36 md:pt-5 lg:pt-0 md:justify-around hidden'>
                        {/* support */}
                        <div className='space-y-4 '>
                            <h2>SUPPORT</h2>
                            <ul className='space-y-3 text-[#AEAEAE]'>
                                <li>Contact</li>
                                <li>Store locator</li>
                                <li>Account</li>
                                <li>FaQs</li>
                            </ul>
                        </div>
                        {/* About */}
                        <div className='space-y-4'>
                            <h1>ABOUT</h1>
                            <ul className='space-y-3 text-[#AEAEAE]'>
                                <li>Our story</li>
                                <li>Our mission</li>
                                <li>Jobs</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        {/* HELP */}
                        <div className='space-y-4'>
                            <h2>HELP</h2>
                            <ul className='space-y-3 text-[#AEAEAE]'>
                                <li>Redeem Code</li>
                                <li>Shipping</li>
                                <li>Returns</li>
                                <li>Warranty</li>
                            </ul>
                        </div>

                    </div>
                    {/* small device show */}
                    <div className='py-4 '>
                        {/* support */}
                        <div tabIndex={0} className="md:hidden collapse collapse-plus border-base-300  ">
                            <div className="collapse-title font-semibold">SUPPORT</div>
                            <div className="collapse-content text-sm">
                                <ul className='space-y-2 text-[#AEAEAE]'>
                                    <li>Contact</li>
                                    <li>Store locator</li>
                                    <li>Account</li>
                                    <li>FaQs</li>
                                </ul>
                            </div>
                        </div>
                        {/*about  */}
                        <div tabIndex={0} className="md:hidden collapse collapse-plus border-base-300  ">
                            <div className="collapse-title font-semibold">ABOUT</div>
                            <div className="collapse-content text-sm">
                                <ul className='space-y-2 text-[#AEAEAE]'>
                                    <li>Our story</li>
                                    <li>Our mission</li>
                                    <li>Jobs</li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                        </div>
                        {/* HELP */}
                        <div tabIndex={0} className="md:hidden collapse collapse-plus border-base-300  ">
                            <div className="collapse-title font-semibold">HELP</div>
                            <div className="collapse-content text-sm">
                                <ul className='space-y-3 text-[#AEAEAE]'>
                                    <li>Redeem Code</li>
                                    <li>Shipping</li>
                                    <li>Returns</li>
                                    <li>Warranty</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;