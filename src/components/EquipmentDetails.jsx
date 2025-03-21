import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EquipmentDetails = () => {
    const detailsEquipment = useLoaderData()
    const { name, price, ratting, stock, processing, photo, details,category } = detailsEquipment
    return (
        <div className='lg:px-32 md:px-10 md:pb-6'>
            <div className=" rounded-sm lg:flex-row flex flex-col justify-center items-center bg-gradient-to-r from-[#BFF098] to-[#6FD6FF]  gap-5 md:px-4 md:py-10 ">
                <img className='rounded-sm md:h-[400px] md:w-[400px]  object-cover pt-5 md:pt-0'
                    src={photo}
                    alt="Album" />
                <div className=" lg:space-y-8 space-y-4 px-4 md:px-0 pb-5 md:pb-0 !text-black">
                    <h2 className="text-2xl">{name}</h2>
                    <p className='text-xl'>Category Items: {category}</p>
                    <p className='text-xl'>Status: {stock}</p>
                    <p className='text-xl'>Price: {price}</p>
                    <p className='text-xl'>specification: {details}</p>
                    <p className='text-xl'>Ratting: {ratting}</p>
                    <p className='text-xl'>Processes time: {processing}</p>
                </div>
            </div>
        </div>
    );
};

export default EquipmentDetails;