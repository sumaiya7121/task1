import React from 'react';
import { RxDotFilled } from "react-icons/rx";
import { ImCheckboxChecked } from "react-icons/im";
const CardTwo = () => {
    return (
         <div className="pt-3 pl-3 border border-lime-400 rounded-md">
      <div>
<div className='flex justify-between'>
            <h2 className="font-bold text-sm ">Heavy Bleeding- Menstrual</h2>
            <h2 className='text-2xl shadow-2xl text-white pr-6 '><ImCheckboxChecked className='bg-white text-cyan-700 border border-none'/></h2>
            
</div>
        <h2>Panel type : Advance</h2>
        <h2 className='pb-2'>
            Report within : 72 hours/ 3 days
        </h2>
        <h2 className='bg-yellow-100 w-[250px] pl-3 rounded-xl'>10-12 hours fasting required</h2>
        <h2 className='pt-2'>Name & no. of parameters: 12 Parameters</h2>
      </div>
      <div>
        <div className="flex">
<RxDotFilled/>
<h2>Urin HCG</h2>
        </div>
         <div className="flex">
<RxDotFilled/>
<h2>CBC</h2>
        </div>
         <div className="flex">
<RxDotFilled/>
<h2>TSH</h2>
        </div>
         <div className="flex">
<RxDotFilled/>
<h2>Ferritin Test</h2>
        </div>
      </div>
      <div className="flex justify-between">
        <h2 className="text-cyan-700">View All Parameters</h2>
        <h2 className="pr-6">Rs. <span className="font-bold text-lg">1249</span></h2>
      </div>
        <div className="pt-6 pb-5 text-center">
<button type="button" className="px-8 py-3 font-semibold rounded-full  bg-cyan-700 text-white">Book Now</button>
      </div>
    </div>
    );
};

export default CardTwo;