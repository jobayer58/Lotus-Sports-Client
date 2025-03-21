import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { NavLink } from 'react-router-dom';

const HomeProductCard = ({product}) => {
    const { name, price, ratting, stock, processing, photo, _id } = product
    return (
        <div>
            <Fade delay={50} cascade damping={0.3}>
                <div className="card card-side bg-base-100 shadow-sm grid lg:flex">
                    <figure className='rounded-t-[10px] rounded-b-none lg:rounded-l-[10px] lg:rounded-r-none'>
                        <img className='lg:h-80 lg:w-80 md:w-full md:h-72 object-cover'
                            src={photo}
                            alt="Movie" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">{name}</h2>
                        <p>Price: {price}</p>
                        <p>Stock-Status :{stock}</p>
                        <p>Ratting: {ratting}</p>
                        <p>Delivery-Time: {processing}</p>
                        <div className='flex gap-5'>
                            <NavLink to={`/equipment/details/${product._id}`}>
                                <button className='btn btn-dash  btn-info'>Viw Details</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default HomeProductCard;