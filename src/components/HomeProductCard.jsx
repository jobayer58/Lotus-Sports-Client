import React from "react";
import { NavLink } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";

const HomeProductCard = ({ product }) => {
  const { name, price, ratting, stock, processing, photo, _id } = product;

  const stars = Array.from({ length: 5 }, (_, i) =>
    i < ratting ? (
      <FaStar key={i} className="text-yellow-400" />
    ) : (
      <FaRegStar key={i} className="text-gray-300" />
    )
  );

  return (
    <div className="flex flex-col bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 overflow-hidden transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 h-full">
      
      {/* Image */}
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <span className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {stock}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-5 flex-1">
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-gray-800">{name}</h2>
          <div className="flex items-center gap-1">{stars}</div>
          <p className="text-primary font-bold text-xl">${price}</p>
          <p className="text-gray-500 text-sm">Delivery: {processing}</p>
        </div>

        <NavLink to={`/equipment/details/${_id}`}>
          <button className="mt-4 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-2.5 px-4 rounded-xl shadow-md hover:shadow-xl hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300">
            View Details
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeProductCard;
