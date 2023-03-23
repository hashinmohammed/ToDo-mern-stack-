import React from "react";
import Tile from "./Tile";

function Container() {
  return (
    <div >

    <div className="h-[544px] w-[52rem] bg-gradient-to-r from-[#FFF7F0] to-white m-12 rounded-3xl shadow-lg margin-none overflow-y-scroll relative  ">
      <div className="bg-white rounded-t-3xl shadow-md w-[52rem] fixed z-50">

      <div className="flex w-full bg-gradient-to-r from-[#C557EF] rounded-t-3xl h-[84px] justify-between items-center ">
        <h1 className="text-[24px] font-bold p-14 text-[#1E0057]">TO DO</h1>
        <button className="bg-[#744BE4] w-16 m-14 rounded-full h-9 shadow-md text-white">
          ADD
        </button>
      </div>
      </div>
      <div className="mt-[84px]">
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      </div>

     
      

     
    </div>
    </div>
  );
}

export default Container;
