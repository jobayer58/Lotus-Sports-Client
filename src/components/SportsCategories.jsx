import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Bounce, Zoom } from 'react-awesome-reveal';


const SportsCategories = () => {
    const { theme } = useContext(AuthContext)
    const [equipments, setEquipments] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        let url = 'https://lotus-sports-server.vercel.app/categoryEquipment';
        if (selectedCategory) {
            url += `?category=${selectedCategory}`;
        }

        fetch(url)
            .then(res => res.json())
            .then(data => setEquipments(data))
            .catch(error => {
                error.message
            });
    }, [selectedCategory]);
    return (
        <div>
            <h1 className={`text-center font-semibold text-2xl ${theme === "dark" ? 'bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] bg-clip-text text-transparent' : " text-black"}`}>Explore Lotus Sports </h1>
            <div className='md:flex grid grid-cols-3 justify-center items-center lg:gap-8 md:gap-4 py-6 md:space-x-0 md:space-y-0 space-x-2 space-y-2 px-3 md:px-0'>
                {["Tennis", "Fitness", "Shoes", "Clothing", "Cricket", "Football"].map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] btn lg:py-6 lg:px-6 lg:text-2xl ${theme === "dark" && " text-black"} ${selectedCategory === category ? "border-2 border-black" : ""}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            {/* card */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-10 py-4">
                {equipments.map(equipment => (
                    <Zoom>
                        <div key={equipment._id} className="border border-[#f6ea6b] p-4">
                            <img src={equipment.photo} alt={equipment.name} className="w-full h-40 object-cover" />
                            <h3 className="text-xl font-semibold  mt-3">{equipment.name}</h3>
                            <p>Price: {equipment.price}</p>
                            <p>Rating: {equipment.ratting}</p>
                        </div>
                    </Zoom>
                ))}
            </div>
        </div>
    );
};

export default SportsCategories;