import React from 'react';
// import deleteIcon from '../assets/icons8-delete-48.png'

const CollectionList = ({collection}) => {
    const {name, price, ratting, photo ,category,details} = collection
    return (
        <div className='md:px-10 px-3'>
            <div className='md:flex md:flex-row md:justify-start md:p-5 flex flex-col justify-center items-center  rounded-2xl bg-gradient-to-r from-[#ddd6f3]  to-[#faaca8] '>
                <div className='md:py-0 py-3 pt-5'>
                    <img className='md:h-60 md:w-60 h-60 w-64 object-cover rounded-2xl' src={photo} alt="" />
                </div>
                <div className='px-5 space-y-3 py-3'>
                    <p className='text-2xl font-semibold'>{name}</p>
                    <p>item: {category}</p>
                    <p>Price: {price}</p>
                    <p>Specification: {details}</p>
                    <p>Rate: {ratting}</p>
                    <div className='flex gap-5'>
                        <button className='btn bg-gradient-to-r from-[#faaca8] to-[#ddd6f3]  '>update Item</button>
                        <button className='btn bg-gradient-to-r from-[#faaca8] to-[#ddd6f3] '>Delete Item</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionList;