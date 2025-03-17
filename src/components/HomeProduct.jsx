import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import HomeProductCard from './HomeProductCard';
const HomeProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/homeEquipment')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => {
                toast(error.message)
            });
    }, []);
    return (
        <div>
            <ToastContainer></ToastContainer>
            <h1 className='text-3xl py-7 text-center'>Most Popular Collections</h1>
            <div className='md:grid md:grid-cols-2 gap-6 md:px-10 px-5 space-y-4 md:space-y-0  py-8'>
                {
                    products.map(product => <HomeProductCard
                        key={product._id}
                        product={product}
                    ></HomeProductCard>)
                }
            </div>
        </div>
    );
};

export default HomeProduct;