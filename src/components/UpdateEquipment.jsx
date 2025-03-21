import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateEquipment = () => {
    const {user} =useContext(AuthContext)
    const updateItem = useLoaderData()
    const {name, price, ratting, processing,stock, photo, category, details, _id,originalId} = updateItem

     const handleUpdateEquipment = e => {
            e.preventDefault()
            const form = e.target
            const name = form.name.value
            const category = form.category.value
            const price = form.price.value
            const ratting = form.ratting.value
            const processing = form.processing.value
            const stock = form.stock.value
            const details = form.details.value
            const photo = form.photo.value
    
            const updatedEquipment = { name, category, price, ratting, processing, stock, details, photo }

            const itemId = originalId || _id;
            
            // send data to the server
            fetch(`https://lotus-sports-server.vercel.app/equipment/${itemId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedEquipment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount> 0) {
                        Swal.fire({
                            title: 'success!',
                            text: 'Sports Equipment update Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                    }else {
                        Swal.fire({
                            title: "No Changes",
                            text: "No modifications were made",
                            icon: "info",
                            confirmButtonText: "Okay",
                        });
                    }
                })
                .catch((error) => {
                    error.message
                });
        }

    return (
        <div>
            <div className=' lg:p-24 p-4 lg:pt-0 md:p-6 bg-[#cde9ed] '>
                <h2 className='text-center md:text-3xl pt-10 py-3 !text-black'>Update Sports Equipments</h2>
                <p className="text-2xl !text-black">Admin Name : {user?.displayName}</p>
                <p className=" !text-black ">Admin Email : {user?.email}</p>
                <div className='text-center text-xl py-4 !text-black'>
                    <p>Update Item: {name}</p>
                </div>
                <form onSubmit={handleUpdateEquipment} className=''>
                    {/* form row-1 */}
                    <div className=' md:flex gap-8'>
                        <div className='md:w-1/2'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend !text-black">Equipment Name</legend>
                                <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Equipment Name" />

                            </fieldset>
                        </div>
                        <div className='md:w-1/2 '>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend !text-black"> Category Name</legend>
                                <input type="text" name='category' defaultValue={category} className="input w-full" placeholder="Category Name" />

                            </fieldset>
                        </div>
                    </div>
                    {/* form row-2 */}
                    <div className=' md:flex gap-8'>
                        <div className='md:w-1/2'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend !text-black">Price </legend>
                                <input type="text" name='price' defaultValue={price} className="input w-full" placeholder="Price " />

                            </fieldset>
                        </div>
                        <div className='md:w-1/2 '>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend !text-black"> Ratting </legend>
                                <input type="text" name='ratting' defaultValue={ratting} className="input w-full" placeholder="Ratting " />

                            </fieldset>
                        </div>
                    </div>
                    {/* form row-3 */}
                    <div className=' md:flex gap-8'>
                        <div className='md:w-1/2'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend !text-black">Processing Time </legend>
                                <input type="text" name='processing' defaultValue={processing} className="input w-full" placeholder="Processing Time " />

                            </fieldset>
                        </div>
                        <div className='md:w-1/2 '>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend !text-black"> Stock Status </legend>
                                <input type="text" name='stock' defaultValue={stock} className="input w-full" placeholder="Stock Status " />

                            </fieldset>
                        </div>
                    </div>
                    {/* form row-4 */}
                    <div className=' md:flex gap-8'>
                        <div className='md:w-1/2'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend !text-black">Details </legend>
                                <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="Details " />

                            </fieldset>
                        </div>
                        <div className='md:w-1/2 '>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend !text-black"> Photo URL</legend>
                                <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="Photo URL" />

                            </fieldset>
                        </div>
                    </div>
                    <input type="submit" value="Update Equipment" className="btn mt-8 text-xl btn-outline btn-success w-full" />
                </form>
            </div>
        </div>
    );
};

export default UpdateEquipment;