import React from 'react';
import { RxDotFilled } from "react-icons/rx";
import { ImCheckboxUnchecked } from "react-icons/im";
const CardFour = () => {
    return (
        <div className="pt-3 pl-3 border border-slate-300 rounded-md">
      <div>
<div className='flex justify-between'>
            <h2 className="font-bold text-sm">Menstrual Irregularities</h2>
  <h2 className="pr-6 text-slate-300 text-2xl shadow-2xl"><ImCheckboxUnchecked/></h2>
            
</div>
        <h2>Panel type : Basic</h2>
        <h2 className='pb-2'>
           Report within : 24 hours/ 1 days
        </h2>
        <h2 className='bg-yellow-100 w-[250px] pl-3 rounded-xl'>Drink 3-4 glasses of water before test</h2>
        <h2 className='pt-2'>Name & no. of parameters: 6 Parameters</h2>
      </div>
      <div>
        <div className="flex">
<RxDotFilled/>
<h2>LH</h2>
        </div>
         <div className="flex">
<RxDotFilled/>
<h2>FSH</h2>
        </div>
         <div className="flex">
<RxDotFilled/>
<h2>TSH</h2>
        </div>
         <div className="flex">
<RxDotFilled/>
<h2>Prolactin</h2>
        </div>
      </div>
      <div className="flex justify-between">
        <h2 className="text-cyan-700">View All Parameters</h2>
        <h2 className="pr-6">Rs. <span className="font-bold text-lg">659</span></h2>
      </div>
       <div className="pt-6 pb-5 text-center">
<button type="button" className="px-8 py-3 font-semibold rounded-full  bg-cyan-700 text-white">Book Now</button>
      </div>
    </div>
    );
};

export default CardFour;