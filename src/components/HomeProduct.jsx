import React, { useContext, useEffect, useState } from 'react';
import HomeProductCard from './HomeProductCard';
import { AuthContext } from '../provider/AuthProvider';
const HomeProduct = () => {
    const [products, setProducts] = useState([]);
    const {theme} = useContext(AuthContext)

    useEffect(() => {
        fetch('https://lotus-sports-server.vercel.app/homeEquipment')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => {
                error.message
            });
    }, []);
    return (
        <div>
            <h1 className={`text-center font-semibold text-3xl py-7 ${theme === "dark" ? 'bg-gradient-to-r from-[#f6ea6b] to-[#eef4ad] bg-clip-text text-transparent' : " text-black" }`}>Most Popular Collections</h1>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-10 px-5 space-y-4 md:space-y-0  py-8'>
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