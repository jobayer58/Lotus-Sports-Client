import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import CollectionList from './CollectionList';
import Reveal, { Fade } from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

const swingAnimation = keyframes`
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;


const MyCollection = () => {
    const { user } = useContext(AuthContext)
    const [collections, setCollections] = useState([])
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/collection?email=${user.email}`)
                .then(res => res.json())
                .then(data => setCollections(data));
        }
    }, [user]);
    return (
        <div>
            <Reveal keyframes={swingAnimation}>
            {
                user?.displayName && <h1 className='text-center text-2xl'>I Am {user?.displayName}</h1>
            }
            </Reveal>
            
            <Fade direction="down" >
                <p className='md:text-2xl text-xl md:px-10 px-3 py-2'>My Collection List : ({collections.length}) Item</p>
            </Fade>
            
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