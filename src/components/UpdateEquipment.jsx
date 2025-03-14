import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const UpdateEquipment = () => {
    const {user} =useContext(AuthContext)
    return (
        <div>
            <div className=' lg:p-24 p-4 lg:pt-0 md:p-6 bg-[#cde9ed] '>
                <h2 className='text-center text-3xl pt-10'>Update Sports Equipments</h2>
                <p className="text-2xl">Admin Name : {user?.displayName}</p>
                <p className=" text-xl ">Admin Email : {user?.email}</p>
                <form className='pt-10'>
                    {/* form row-1 */}
                    <div className=' md:flex gap-8'>
                        <div className='md:w-1/2'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Equipment Name</legend>
                                <input type="text" name='name' className="input w-full" placeholder="Equipment Name" />

                            </fieldset>
                        </div>
                        <div className='md:w-1/2 '>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend"> Category Name</legend>
                                <input type="text" name='category' className="input w-full" placeholder="Category Name" />

                            </fieldset>
                        </div>
                    </div>
                    {/* form row-2 */}
                    <div className=' md:flex gap-8'>
                        <div className='md:w-1/2'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Price </legend>
                                <input type="text" name='price' className="input w-full" placeholder="Price " />

                            </fieldset>
                        </div>
                        <div className='md:w-1/2 '>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend"> Ratting </legend>
                                <input type="text" name='ratting' className="input w-full" placeholder="Ratting " />

                            </fieldset>
                        </div>
                    </div>
                    {/* form row-3 */}
                    <div className=' md:flex gap-8'>
                        <div className='md:w-1/2'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Processing Time </legend>
                                <input type="text" name='processing' className="input w-full" placeholder="Processing Time " />

                            </fieldset>
                        </div>
                        <div className='md:w-1/2 '>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend"> Stock Status </legend>
                                <input type="text" name='stock' className="input w-full" placeholder="Stock Status " />

                            </fieldset>
                        </div>
                    </div>
                    {/* form row-4 */}
                    <div className=' md:flex gap-8'>
                        <div className='md:w-1/2'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Details </legend>
                                <input type="text" name='details' className="input w-full" placeholder="Details " />

                            </fieldset>
                        </div>
                        <div className='md:w-1/2 '>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend"> Photo URL</legend>
                                <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />

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