import React from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
// import { useState } from "react";

function Tile() {
   
  return (
    <div id='alltile'>
      <div className="flex text-slate-400">
        <div className="h-28 w-[112px] bg-gradient-to-r from-[#dae4e3] m-6 rounded-lg shadow-md hover:scale-105 cursor-pointer">
          <div className="flex flex-col gap-1 justify-center items-center p-4 font-bold">
            <p>MONDAY</p>
            <h1 className="text-3xl">18</h1>
            <p>2023</p>
          </div>
        </div>

        <div className="h-28 my-6 bg-gradient-to-r from-[#dae4e3] w-3/4 rounded-lg shadow-md hover:scale-105 cursor-pointer flex justify-center items-center overflow-hidden">
          <h1 className="capitalize font-extrabold text-3xl">
          
            telephone bill
          </h1>
          <div className="flex  gap-12 ml-48 ">
            <div>
              <AiTwotoneEdit className="hover:bg-slate-200 h-10  w-10 p-2 rounded-full " />
            </div>
            <div>
              <RiDeleteBin5Line  className="hover:bg-slate-200 h-10  w-10 p-2 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tile;
