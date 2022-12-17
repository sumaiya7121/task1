import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import CardFour from "../CardFour/CardFour";

import CardOne from "../CardOne/CardOne";
import CardThree from "../CardThree/CardThree";
import CardTwo from "../CardTwo/CardTwo";

const Cards = () => {
  return (
    <div className="w-[358px] bg-white m-auto pl-7 pr-7">
      <div className="flex justify-start items-center  ps-8 pt-6">
        <div className="text-2xl">
          <HiOutlineArrowLeft />
        </div>
        <div>
          <h2 className="text-2xl pl-3 font-semibold">Select Test</h2>
        </div>
      </div>
      <div className="flex items-center pl-[30px]">
        <div className="text-2xl text-sky-700">
          <IoLocationOutline />
        </div>
        <div className="flex font-medium text-sm">
          <h2 className="pl-2 pr-1 text-sky-700 font-medium">Delhi</h2>
          <h2>|</h2>
          <h2 className="pl-1">Lab timing: 8 AM to 12 AM</h2>
        </div>
      </div>
     <div className="pt-6">
         <div className="py-2 px-2 flex justify-between items-center border border-1 rounded content-center">
<h2>Search tests</h2>
        <AiOutlineSearch/>
      
      </div>
     </div>
      <div className="pb-2 pt-6 font-bold text-lg">
        <h2>
            Frequently booked tests
        </h2>
      </div>
      <div className="pt-4">
        <CardOne></CardOne>
      </div>
        <div className="pt-4">
        <CardTwo></CardTwo>
      </div>
              <div className="pt-4">
        <CardThree></CardThree>
      </div>
              <div className="pt-4">
        <CardFour></CardFour>
      </div>
      <div className="pt-11 pb-11 text-center">
<button type="button" className="px-8 py-3 font-semibold rounded-full w-full  bg-cyan-700 text-white">Add Tests (1 selected)</button>
      </div>
    </div>
  );
};

export default Cards;
