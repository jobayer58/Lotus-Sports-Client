import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
// import deleteIcon from '../assets/icons8-delete-48.png'

const CollectionList = ({ collection, setCollections, collections }) => {
    const { name, price, ratting, photo, category, details, _id } = collection
    const {theme} =useContext(AuthContext)


    const handleDeleteItem = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/collection/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = collections.filter(col => col._id !== _id)
                            setCollections(remaining)

                        }
                    })

            }
        });
    }
    return (
        <div className='md:px-10 px-3'>
            <Fade direction="left" >
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
                            <NavLink to={`/equipment/update/${collection._id}`}>
                                <button className={`btn bg-gradient-to-r from-[#faaca8] to-[#ddd6f3] ${theme === "dark" && " text-black" }`}>Update </button>
                            </NavLink>
                            <button onClick={() => handleDeleteItem(_id)} className={`btn bg-gradient-to-r from-[#faaca8] to-[#ddd6f3] ${theme === "dark" && " text-black" }`}>Delete 
                            
                            </button>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default CollectionList;