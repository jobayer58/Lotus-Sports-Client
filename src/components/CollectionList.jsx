import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const CollectionList = ({ collection, setCollections, collections }) => {
  const { name, price, ratting, photo, category, details, _id } = collection;
  const { theme } = useContext(AuthContext);

  const handleDeleteItem = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be removed from your cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://lotus-sports-server.vercel.app/collection/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Item removed from cart.",
                icon: "success",
              });
              const remaining = collections.filter((col) => col._id !== _id);
              setCollections(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="px-4 md:px-10">
      <Fade direction="left">
        <div className="flex flex-col md:flex-row items-center gap-6 rounded-2xl shadow-lg border border-gray-200 overflow-hidden bg-white dark:bg-gray-900 transition">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              className="h-48 w-64 md:h-56 md:w-56 object-cover rounded-xl m-4"
              src={photo}
              alt={name}
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between py-4 px-6 space-y-2 flex-grow">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {name}
            </h2>
            <p className="text-gray-500 dark:text-gray-300">
              Category: <span className="font-medium">{category}</span>
            </p>
            <p className="text-gray-500 dark:text-gray-300">
              Specification: <span className="font-medium">{details}</span>
            </p>
            <p className="text-gray-700 dark:text-gray-200 font-semibold">
              ⭐ Rating: {ratting}
            </p>
            <p className="text-lg font-bold text-green-600">💲 {price}</p>

            {/* Buttons */}
            <div className="flex gap-4 pt-3">
              <NavLink to={`/equipment/update/${collection._id}`}>
                <button
                  className={`px-5 py-2 rounded-lg font-medium transition 
                  ${
                    theme === "dark"
                      ? "bg-yellow-300 text-black hover:bg-yellow-400"
                      : "bg-indigo-500 text-white hover:bg-indigo-600"
                  }`}
                >
                  Update
                </button>
              </NavLink>
              <button
                onClick={() => handleDeleteItem(_id)}
                className={`px-5 py-2 rounded-lg font-medium transition 
                ${
                  theme === "dark"
                    ? "bg-red-400 text-black hover:bg-red-500"
                    : "bg-red-500 text-white hover:bg-red-600"
                }`}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default CollectionList;
