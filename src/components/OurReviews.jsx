import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const reviews = [
    {
        id: 1,
        name: "John Doe",
        review: "This is the best sports store! Great quality and fast delivery.",
        rating: 5,
        img: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: 2,
        name: "Sarah Smith",
        review: "Excellent service! The Badminton I bought was amazing!",
        rating: 4,
        img: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        id: 3,
        name: "Michael Jordan",
        review: "As an athlete, I love the quality of their products!",
        rating: 5,
        img: "https://randomuser.me/api/portraits/men/3.jpg",
    },
];


const OurReviews = () => {
    const {theme} = useContext(AuthContext)

    return (
        <div className='py-8'>
            <h1 className={`text-center font-semibold md:text-3xl text-3xl py-6 ${theme === "dark" ? 'bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] bg-clip-text text-transparent' : " text-black" }`}>Our Best Customers</h1>
            <div className="grid md:grid-cols-3 gap-6 px-10">
                {reviews.map((customer) => (
                    <div key={customer.id} className=" p-6 rounded-2xl shadow-md text-center">
                        <img
                            src={customer.img}
                            alt={customer.name}
                            className="w-24 h-24 object-cover mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-lg font-semibold">{customer.name}</h3>
                        <p className="text-gray-600">{customer.review}</p>
                        <div className="flex justify-center mt-2">
                            {"⭐".repeat(customer.rating)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurReviews;