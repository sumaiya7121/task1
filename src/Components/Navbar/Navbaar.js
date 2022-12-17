import React from 'react';
import { TbAlignRight } from "react-icons/tb";
import suitcase from '../../Assets/suitcase.png'
const Navbaar = () => {
    return (
        <div className='flex justify-between items-center pr-5 pl-5 px-8 py-8'>
            <div className='flex'>
                <img className='mr-2 w-8 h-7' src={suitcase} alt=''/>
<h2 className='text-xl font-bold text-cyan-700'>Logo</h2>
            </div>
            <div className='w-5 h-4 text-2xl'>
<TbAlignRight className='text-cyan-700' />
            </div>

          
        </div>
    );
};

export default Navbaar;