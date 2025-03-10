import React from 'react';
import { NavLink } from 'react-router-dom';

const ExploreGearsCard = ({ equipment }) => {
    const { name, price, ratting, stock, processing, photo } = equipment
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm grid md:flex">
                <figure className='rounded-t-[10px] rounded-b-none md:rounded-l-[10px] md:rounded-r-none'>
                    <img className='h-80 w-80 object-cover'
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Stock-Status :{stock}</p>
                    <p>Ratting: {ratting}</p>
                    <p>Delivery-Time: {processing}</p>
                    <NavLink to={`/equipment/${equipment._id}`}>
                        <button className='btn btn-dash w-full btn-info'>Viw Details</button>
                    </NavLink>

                </div>
            </div>
        </div>
    );
};

export default ExploreGearsCard;