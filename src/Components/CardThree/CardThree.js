import React from 'react';
import { RxDotFilled } from "react-icons/rx";
import { ImCheckboxUnchecked } from "react-icons/im";
const CardThree = () => {
    return (
         <div className="pt-3 pl-3 border border-slate-300 rounded-md">
      <div>
<div className="flex justify-between">
            <h2 className="text-sm font-bold">PCOS - Basic 1</h2>
            <h2 className="pr-6 text-slate-300 text-2xl shadow-2xl"><ImCheckboxUnchecked/></h2>
</div>
        <h2>Panel type : Basic</h2>
        <h2>Report within : 24 hours/ 1 days</h2>
        <h2>Name & no. of parameters: 11 Parameters</h2>
      </div>
      <div>
        <div className="flex">
<RxDotFilled/>
<h2>Total Testoterone</h2>
        </div>
         <div className="flex">
<RxDotFilled/>
<h2>Free Testoterone</h2>
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
        <h2 className="text-sky-700">View All Parameters</h2>
        <h2 className="pr-6">Rs. <span className="font-bold text-lg">899</span></h2>
      </div>
       <div className="pt-6 pb-5 text-center">
<button type="button" className="px-8 py-3 font-semibold rounded-full  bg-cyan-700 text-white">Book Now</button>
      </div>
    </div>
    );
};

export default CardThree;