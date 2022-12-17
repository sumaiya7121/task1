import React from 'react';
import header from '../../Assets/header.png'

const Header = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={header} alt=''/>
        </div>
    );
};

export default Header;