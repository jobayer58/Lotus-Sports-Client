import React from "react";
import { useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const EquipmentDetails = () => {
  const detailsEquipment = useLoaderData();
  const { name, price, ratting, stock, processing, photo, details, category } = detailsEquipment;

  return (
    <div className="lg:px-32 md:px-10 px-5 py-10 bg-gray-50 min-h-screen">
      <Fade cascade damping={0.2}>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2">
            {/* Left: Image */}
            <div className="w-full h-[350px] md:h-[500px] bg-gray-100 flex items-center justify-center">
              <img
                className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-200"
                src={photo}
                alt={name}
              />
            </div>

            {/* Right: Info */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {name}
              </h1>

              {/* Category */}
              <p className="text-lg text-gray-600 mb-6">
                <span className="font-medium text-gray-800">Category:</span> {category}
              </p>

              {/* Price + Stock */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <p className="text-2xl font-semibold text-green-600">
                  ${price}
                </p>
                <span
                  className={`px-4 py-1 rounded-full text-sm font-medium ${
                    stock.toLowerCase() === "in stock"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {stock}
                </span>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-y-4 text-gray-700 mb-8">
                <p>
                  <span className="font-semibold">Rating:</span> ⭐ {ratting}
                </p>
                <p>
                  <span className="font-semibold">Processing Time:</span> {processing}
                </p>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Specifications
                </h2>
                <p className="text-gray-600 leading-relaxed">{details}</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default EquipmentDetails;
