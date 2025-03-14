import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import CollectionList from './CollectionList';

const MyCollection = () => {
    const {user} = useContext(AuthContext)
    const [collections,setCollections]=useState([])
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/collection?email=${user.email}`)
                .then(res => res.json())
                .then(data => setCollections(data));
        }
    }, [user]);
    return (
        <div>
           {
            user?.displayName && <h1 className='text-center text-2xl'>I Am {user?.displayName}</h1>
           }
           <p className='md:text-2xl text-xl md:px-10 px-3 py-2'>My Collection List : ({collections.length}) Item</p>
           <div className='space-y-6 py-4'>
            {
                collections.map(collection => <CollectionList setCollections={setCollections}
                    collections={collections}
                     key={collection._id} collection={collection}
                ></CollectionList>)
            }
           </div>
           
        </div>
    );
};

export default MyCollection;