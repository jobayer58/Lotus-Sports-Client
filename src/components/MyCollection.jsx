import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const MyCollection = () => {
    const {user} = useContext(AuthContext)
    const collection = useLoaderData()
    return (
        <div>
           <h1 className='text-center text-2xl'>I Am {user.displayName}</h1>
           <p>my List : {collection.length}</p>
           {
            collection.map(cl => <ha>{cl.name}</ha>)
           }
        </div>
    );
};

export default MyCollection;