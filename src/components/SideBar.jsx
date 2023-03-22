import React from "react";
import { FcTodoList } from "react-icons/fc";
// import { FcTodoList } from "re";
import {BiHome} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
function SideBar() {
  return (
    <div className="bg-[#1E0057] h-screen w-16 flex flex-col shadow-xlg justify-center items-center">
      {/* FC TODO LIST ICON  */}
      <div className="flex-grow pt-10">
        <FcTodoList className="w-10 h-10" />
      </div>
      <div className="flex flex-col flex-grow gap-8 text-[24px] text-white/40">
        <button><BiHome /></button>
        <button><AiOutlineUser /></button>
        <button><BiHome /></button>
        <button><BiHome /></button>
        <button><BiHome /></button>
        <button><BiHome /></button>
      </div>
      <div className="flex-grow text-white/40 text-[24px] pt-8">
        <button><FiLogOut /></button>
      </div>
    </div>
  );
}

export default SideBar;
