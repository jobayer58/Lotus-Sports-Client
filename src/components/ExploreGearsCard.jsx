import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const ExploreGearsCard = ({ equipment }) => {
    const { name, price, ratting, stock, processing, photo, } = equipment
    const {user} = useContext(AuthContext);

    const handleAddToCollection = async (equipment) => {
        
        if (!user?.email) {
            alert("Please log in to add items to your list.");
            return;
        }
        const itemWithUser = {
            ...equipment,
            userEmail: user.email, 
        };
        const response = await fetch('http://localhost:5000/collection', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(itemWithUser)
        });
        const data = await response.json();
        if (data.insertedId) {
            alert("Added to My Collection Successfully!");
        }
    };
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
                    <div className='flex gap-5'>
                        <NavLink to={`/equipment/details/${equipment._id}`}>
                            <button className='btn btn-dash  btn-info'>Viw Details</button>
                        </NavLink>
                            <button onClick={()=> handleAddToCollection (equipment)} className='btn btn-outline btn-primary'>Add List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreGearsCard;