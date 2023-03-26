import React, { useState } from "react";
// import { AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";

function Tile({ heading, date, id, setList }) {
  const selectedDate = new Date(date);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[selectedDate.getDay()];
  const handleDelete = () => {
    // Get the list of tiles from localStorage
    const tiles = JSON.parse(localStorage.getItem("todos")) || [];

    // Filter out the tile with the matching id
    const updatedTiles = tiles.filter((tile) => tile.id !== id);

    // Update the list of tiles in localStorage
    localStorage.setItem("todos", JSON.stringify(updatedTiles));

    // Rerender the tiles by setting state in the parent component
    setList(updatedTiles);
  };
  return (
    <div id="alltile" className="mr-8">
      <div className="flex text-slate-400">
        <div className="h-28 w-[112px] bg-gradient-to-r from-[#dae4e3] m-6 rounded-lg shadow-md hover:scale-105 cursor-pointer">
          <div className="flex flex-col gap-1 justify-center items-center p-4 font-bold">
            <p className="uppercase">{dayOfWeek}</p>
            <h1 className="text-3xl">{date.slice(-2)}</h1>
            <p>{date.slice(0, 4)}</p>
          </div>
        </div>

        <div className="h-28 my-6 bg-gradient-to-r from-[#dae4e3] w-full rounded-lg shadow-md hover:scale-105 cursor-pointer flex items-center justify-between overflow-hidden">
        <div className="w-3/4 overflow-auto"> <h1 className="capitalize font-extrabold text-2xl ml-32">{heading}</h1></div>
         
         
            {/* <div>
              <AiTwotoneEdit className="hover:bg-slate-200 h-10  w-10 p-2 rounded-full " />
            </div> */}
            <div className="flex justify-center items-center h-full w-1/4">  
            <div>
              <RiDeleteBin5Line
                onClick={handleDelete}
                className="hover:bg-slate-200 h-10  w-10 p-2   rounded-full"
              />
            </div>
            </div>
           
         
        </div>
      </div>
    </div>
  );
}

export default Tile;
