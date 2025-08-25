import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Zoom } from 'react-awesome-reveal';

const SportsCategories = () => {
    const { theme } = useContext(AuthContext);
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
                console.error(error.message);
            });
    }, [selectedCategory]);

    return (
        <div className="px-4 md:px-8 lg:px-12 py-8">
            {/* Heading */}
            <h1
                className={`text-center font-bold text-3xl md:text-4xl mb-8 ${
                    theme === "dark"
                        ? 'bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] bg-clip-text text-transparent'
                        : "text-gray-900"
                }`}
            >
                Explore Lotus Sports
            </h1>

            {/* Category buttons */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10">
                {["Tennis", "Fitness", "Shoes", "Clothing", "Cricket", "Football"].map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium text-base md:text-lg transition-all duration-300 
                            ${theme === "dark" ? "text-black" : "text-gray-900"} 
                            bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] 
                            hover:scale-105 hover:shadow-md
                            ${selectedCategory === category ? "ring-2 ring-offset-2 ring-yellow-400" : ""}
                        `}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Equipment cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {equipments.map((equipment) => (
                    <Zoom key={equipment._id}>
                        <div className={`border border-yellow-300 rounded-xl p-4 shadow-sm hover:shadow-lg transition duration-300 bg-white ${theme === "dark" ? 'bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] bg-clip-text text-transparent' : " text-black" }`}>
                            <img
                                src={equipment.photo}
                                alt={equipment.name}
                                className="w-full h-40 md:h-48 object-cover rounded-lg"
                            />
                            <h3 className="text-lg md:text-xl font-semibold mt-3 line-clamp-1">
                                {equipment.name}
                            </h3>
                            <p className="text-sm md:text-base">💲 Price: {equipment.price}</p>
                            <p className="text-sm md:text-base">⭐ Rating: {equipment.ratting}</p>
                        </div>
                    </Zoom>
                ))}
            </div>
        </div>
    );
};

export default SportsCategories;
