import React from "react";

function RightPanel() {
  return (
    <div className="bg-white h-[34rem] w-[360px] rounded-3xl  mt-12 -mx-6 shadow-lg">
      <img
        className="bg-cover pt-6"
        src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=740&t=st=1679481034~exp=1679481634~hmac=eaec19fb99f914fbfe38c5fdfe3c9c809d754ce0857e37b2449bf153b0958b7e"
        alt=""
      />
      <div className="grid grid-cols-2 h-[254px] mt-4 ml-10">
    
        <div className="w-[124px]  h-[106px]  bg-[#ECF3FF] rounded-lg flex flex-col items-center justify-center gap-3 hover:scale-110 hover:animate-pulse shadow-md ">
          <h2 className="text-slate-400 ">Total</h2>
          <h1 className="text-slate-600 text-lg font-extrabold ">144</h1>
        </div>
        <div className="w-[124px]  h-[106px]  bg-[#FFEFE2] rounded-lg flex flex-col items-center justify-center gap-3 hover:scale-110 hover:animate-pulse shadow-md">
          <h2 className="text-slate-400 ">Complteted</h2>
          <h1 className="text-slate-600 text-lg font-extrabold">56</h1>
        </div>
        <div className="w-[124px] h-[106px]  bg-[#FEEEFF] rounded-lg flex flex-col items-center justify-center gap-3 hover:scale-110 hover:animate-pulseshadow-md">
          <h2 className="text-slate-400 ">In Progress</h2>
          <h1 className="text-slate-600 text-lg font-extrabold">73</h1>
        </div>
        <div className="w-[124px] h-[106px]  bg-[#F1ECFF] rounded-lg flex flex-col items-center justify-center gap-3 hover:scale-110 hover:animate-pulse shadow-md">
          <h2 className="text-slate-400 ">TOTAL</h2>
          <h1 className="text-slate-600 text-lg font-extrabold">24</h1>
        </div>
      </div>
    </div>
  );
}

export default RightPanel;
