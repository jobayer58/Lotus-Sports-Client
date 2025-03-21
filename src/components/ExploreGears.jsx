import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ExploreGearsCard from './ExploreGearsCard';
import { AuthContext } from '../provider/AuthProvider';

const ExploreGears = () => {
    const loadedEquipments = useLoaderData()
    const [equipments, setEquipments] = useState(loadedEquipments)
    const {theme} = useContext(AuthContext)

    const handleAscendingPrice = () => {
        const sortedEquipments = [...equipments].sort((a, b) => a.price - b.price);
        setEquipments(sortedEquipments);
    }

    const handleDescendingPrice = () => {
        const sortedEquipments = [...equipments].sort((a, b) => b.price - a.price);
        setEquipments(sortedEquipments);
    }
    return (
        <div>
            <h1 className={`text-center font-semibold md:text-4xl text-3xl py-6 ${theme === "dark" ? 'bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] bg-clip-text text-transparent' : " text-black" }`}>All Sports Equipment:- ({loadedEquipments.length}) </h1>
            <div className='md:flex grid md:justify-end md:pr-10 md:gap-4 px-5 lg:py-0 pt-5 space-y-3'>
                <button onClick={handleAscendingPrice} className={`bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] btn  ${theme === "dark" && " text-black" }`}>Ascending Price</button>
                <button onClick={handleDescendingPrice} className={`bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] btn  ${theme === "dark" && " text-black" }`}>Descending Price</button>
            </div>
            <div className='md:grid md:grid-cols-2 gap-6 md:px-10 px-5 space-y-4 md:space-y-0  py-8'>
                {
                    equipments.map(equipment => <ExploreGearsCard
                        key={equipment._id}
                        equipment={equipment}
                    ></ExploreGearsCard>)
                }
            </div>

        </div>
    );
};

export default ExploreGears;