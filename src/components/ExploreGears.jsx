import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ExploreGearsCard from './ExploreGearsCard';

const ExploreGears = () => {
    const equipments = useLoaderData()
    return (
        <div>
            <h1 className='text-4xl text-center'>All Sports Equipment: {equipments.length} </h1>
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