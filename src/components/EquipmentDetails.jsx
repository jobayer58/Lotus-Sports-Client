import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EquipmentDetails = () => {
    const detailsEquipment = useLoaderData()
    const { name, price, ratting, stock, processing, photo ,details} = detailsEquipment
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm px-20 py-10 ">
                <figure className=' h-[400px]  object-cover'>
                    <img 
                        src={photo}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Status: {stock}</p>
                    <p>Price: {price}</p>
                    <p>specification: {details}</p>
                    <p>Ratting: {ratting}</p>
                    <p>Processes time: {processing}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add My Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EquipmentDetails;