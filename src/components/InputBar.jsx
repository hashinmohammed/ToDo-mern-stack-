import React from "react";
import { BiSearch } from "react-icons/bi";
import {HiOutlineBell} from 'react-icons/hi'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {AiTwotoneCalendar} from 'react-icons/ai'

function InputBar() {
  return (
    <div className="mt-5 ">
      <div className="flex gap-5 border-none  ">
        <div className="ml-12">
          <div className="flex bg-white rounded-3xl gap-5">
            <span className="p-3 ml-3 text-slate-400 ">
              <BiSearch />
            </span>
            <form className="flex" action="">
              {" "}
              <input
                className="rounded-r-3xl text-[#9272EA] focus:outline-none caret-yellow-400 w-full h-full"
                type="text"
                placeholder="Search"
              />
            </form>
          </div>
        </div>

        <div className="flex ml-[620px] gap-5 items-center justify-center">
          <button><AiTwotoneCalendar className="text-slate-400"/></button>
          <button><HiOutlineBell className="text-slate-400"/> </button>
          <span className="text-slate-400"> |</span>
          <img className="h-8 w-8 rounded-full" src="https://www.svgrepo.com/show/170303/avatar.svg" alt="csd" />
          <h3 className="text-slate-400">Hashin</h3>
          <div><MdKeyboardArrowDown className="text-slate-400"/></div>
        </div>
      </div>
    </div>
  );
}

export default InputBar;
