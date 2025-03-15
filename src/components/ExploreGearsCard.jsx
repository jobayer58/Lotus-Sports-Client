import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Slide, toast, ToastContainer } from 'react-toastify';

const ExploreGearsCard = ({ equipment }) => {
    const { name, price, ratting, stock, processing, photo, _id } = equipment
    const { user,loading } = useContext(AuthContext);

    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/collection?email=${user.email}`)
                .then(res => res.json())
                .then(data => {                       
                    const exists = data.some(item => String(item._id) === String(_id));          
                    setIsAdded(exists);
                })
                .catch(error => console.error("Error fetching collection:", error));
        }
    }, [user?.email, _id]);

    if (loading) {
        return <div className='flex min-h-screen justify-center items-center'><span className=" loading loading-bars loading-xl"></span></div>
    }

    const handleAddToCollection = async () => {

        if (!user?.email) {
            alert("Please log in to add items to your list.");
            return;
        }

        if (isAdded) {
            toast.info("This Item All Ready added My Collection",{
                position: "top-center",
                closeOnClick: true,
                transition: Slide,
            });
            return;
        }

        const { _id, ...itemWithoutId } = equipment;
        const itemWithUser = { 
            ...itemWithoutId, 
            userEmail: user.email,
            originalId: _id 
        };

        
        const response = await fetch('http://localhost:5000/collection', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(itemWithUser)
        });
        const data = await response.json();
        if (data.insertedId) {
            
            toast("Added to My Collection Successfully!",{
                position: "top-center",
                closeOnClick: true,
                transition: Slide,
            });
        } else {
            toast.warn(data.message || "Something went wrong!");
        }
    };
    return (
        <div>
             <ToastContainer></ToastContainer>
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
                        <button
                            onClick={handleAddToCollection}
                            className='btn btn-outline btn-info'
                        >
                           Add to Collection
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreGearsCard;