import React, { useContext, useState } from 'react';
import { useLoaderData, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Slide, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ExploreGears = () => {
    const loadedEquipments = useLoaderData();
    const [equipments, setEquipments] = useState(loadedEquipments);
    const { theme, user } = useContext(AuthContext);

    const handleAscendingPrice = () => {
        const sortedEquipments = [...equipments].sort((a, b) => a.price - b.price);
        setEquipments(sortedEquipments);
    };

    const handleDescendingPrice = () => {
        const sortedEquipments = [...equipments].sort((a, b) => b.price - a.price);
        setEquipments(sortedEquipments);
    };

    const handleAddToCollection = async (equipment) => {
        if (!user?.email) {
            alert("Please log in to add items to your list.");
            return;
        }

        const itemWithUser = {
            ...equipment,
            userEmail: user.email,
            originalId: equipment._id,
        };

        const response = await fetch('https://lotus-sports-server.vercel.app/collection', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(itemWithUser),
        });

        const data = await response.json();
        if (data.insertedId) {
            toast.success("Added to My Collection!", {
                position: "top-center",
                closeOnClick: true,
                transition: Slide,
            });
        } else {
            toast.warn(data.message || "Something went wrong!");
        }
    };

    return (
        <div className="px-5 md:px-10 py-10">
            <ToastContainer />
            <h1 className={`text-center font-semibold md:text-4xl text-3xl py-6 ${theme === "dark"
                ? 'bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] bg-clip-text text-transparent'
                : "text-black"}`}>
                All Sports Equipment ({loadedEquipments.length})
            </h1>

            {/* Sorting buttons */}
            <div className="flex flex-wrap justify-end gap-4 mb-6">
                <button onClick={handleAscendingPrice} className={`bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] btn ${theme === "dark" && "text-black"}`}>
                    Ascending Price
                </button>
                <button onClick={handleDescendingPrice} className={`bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] btn ${theme === "dark" && "text-black"}`}>
                    Descending Price
                </button>
            </div>

            {/* Table format */}
            <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                <table className="table w-full">
                    {/* Table head */}
                    <thead className="bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad]">
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Rating</th>
                            <th>Delivery Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipments.map((equipment) => (
                            <tr key={equipment._id} className="hover">
                                <td>
                                    <img
                                        src={equipment.photo}
                                        alt={equipment.name}
                                        className="h-16 w-16 object-cover rounded"
                                    />
                                </td>
                                <td className="font-semibold">{equipment.name}</td>
                                <td>${equipment.price}</td>
                                <td>{equipment.stock}</td>
                                <td>{equipment.ratting}</td>
                                <td>{equipment.processing}</td>
                                <td className="flex flex-col gap-2">
                                    <NavLink to={`/equipment/details/${equipment._id}`}>
                                        <button className="px-3 py-1 rounded bg-sky-500 text-white hover:opacity-90">
                                            View
                                        </button>
                                    </NavLink>
                                    <button
                                        onClick={() => handleAddToCollection(equipment)}
                                        className="px-3 py-1 rounded border border-sky-500 text-sky-600 hover:bg-sky-50"
                                    >
                                        Add
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExploreGears;
