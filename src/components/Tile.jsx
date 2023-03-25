import React from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";

function Tile({heading, description, date}) {
  console.log("=====>",date)
  const selectedDate = new Date(date);
  console.log("=======>date",selectedDate);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek =daysOfWeek[ selectedDate.getDay()];
console.log("========>day",dayOfWeek)
  return (
    <div id='alltile'>
      <div className="flex text-slate-400">
        <div className="h-28 w-[112px] bg-gradient-to-r from-[#dae4e3] m-6 rounded-lg shadow-md hover:scale-105 cursor-pointer">
          <div className="flex flex-col gap-1 justify-center items-center p-4 font-bold">
            <p className="uppercase">{dayOfWeek}</p>
            <h1 className="text-3xl">{date.slice(-2)}</h1>
            <p>{date.slice(0,4)}</p>
          </div>
        </div>

        <div className="h-28 my-6 bg-gradient-to-r from-[#dae4e3] w-3/4 rounded-lg shadow-md hover:scale-105 cursor-pointer flex justify-center items-center overflow-hidden">
          <h1 className="capitalize font-extrabold text-3xl">
            {heading}
          </h1>
          <div className="flex gap-12 ml-48 ">
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
