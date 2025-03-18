import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2'

const AddEquipment = () => {
    const { user } = useContext(AuthContext)
    const handleAddEquipment = e => {
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

        const newEquipment = { name, category, price, ratting, processing, stock, details, photo }
        

        // send data to the server
        fetch('http://localhost:5000/equipment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEquipment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Sports Equipment added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }
    return (
        <div>
            <div className=' lg:p-24 p-4 lg:pt-0 md:p-6 bg-[#cde9ed] '>
                <h2 className='text-center md:text-3xl pt-10 !text-black py-3'>Add New Sports Equipments</h2>
                <p className="text-2xl !text-black">Admin Name : {user?.displayName}</p>
                <p className=" text-xl !text-black">Admin Email : {user?.email}</p>
                <form onSubmit={handleAddEquipment} className='pt-10'>
                    {/* form row-1 */}
                    <div className=' md:flex gap-8'>
                        <div className='md:w-1/2'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend !text-black">Equipment Name</legend>
                                <input type="text" name='name' className="input w-full" placeholder="Equipment Name" />

                            </fieldset>
                        </div>
                        <div className='md:w-1/2 '>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend !text-black"> Category Name</legend>
                                <input type="text" name='category' className="input w-full" placeholder="Category Name" />

                            </fieldset>
                        </div>
                    </div>
                    {/* form row-2 */}
                    <div className=' md:flex gap-8'>
                        <div className='md:w-1/2'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend !text-black">Price </legend>
                                <input type="text" name='price' className="input w-full" placeholder="Price " />

                            </fieldset>
                        </div>
                        <div className='md:w-1/2 '>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend !text-black"> Ratting </legend>
                                <input type="text" name='ratting' className="input w-full" placeholder="Ratting " />

                            </fieldset>
                        </div>
                    </div>
                    {/* form row-3 */}
                    <div className=' md:flex gap-8'>
                        <div className='md:w-1/2'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend !text-black">Processing Time </legend>
                                <input type="text" name='processing' className="input w-full" placeholder="Processing Time " />

                            </fieldset>
                        </div>
                        <div className='md:w-1/2 '>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend !text-black"> Stock Status </legend>
                                <input type="text" name='stock' className="input w-full" placeholder="Stock Status " />

                            </fieldset>
                        </div>
                    </div>
                    {/* form row-4 */}
                    <div className=' md:flex gap-8'>
                        <div className='md:w-1/2'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend !text-black">Details </legend>
                                <input type="text" name='details' className="input w-full" placeholder="Details " />

                            </fieldset>
                        </div>
                        <div className='md:w-1/2 '>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend !text-black"> Photo URL</legend>
                                <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />

                            </fieldset>
                        </div>
                    </div>
                    
                    <input type="submit" value="Add Equipment" className="btn mt-8 text-xl btn-outline btn-success w-full" />
                </form>
            </div>
        </div>
    );
};

export default AddEquipment;