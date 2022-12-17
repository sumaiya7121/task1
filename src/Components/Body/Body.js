import React from 'react';
import Cards from '../Cards/Cards';
import Header from '../Header/Header';

const Body = () => {
    return (
        <div className='bg-sky-50 flex justify-center items-center flex-col'>
            <div><Header></Header></div>
            <div><Cards></Cards></div>
        </div>
    );
};

export default Body;