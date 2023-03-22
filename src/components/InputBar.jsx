import React from "react";
import { BiSearch } from "react-icons/bi";
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
          <button><BiSearch /></button>
          <button><BiSearch /></button>
          <span>|</span>
          <img src="" alt="csd" />
          <h3>fdfd</h3>
          <div>icon</div>
        </div>
      </div>
    </div>
  );
}

export default InputBar;
