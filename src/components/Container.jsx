import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import TextArea from "./TextArea";

function Container() {
  const [isAdding, setIsAdding] = useState(false);
  const [list, setList] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const handleAddClick = () => {
    setIsAdding(!isAdding);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  const updateList = (newList) => {
    setList(newList);
  };

  return (
    <div>
      <div className="h-[544px] w-[52rem] bg-gradient-to-r from-[#FFF7F0] to-white m-12 rounded-3xl shadow-lg margin-none overflow-y-scroll relative">
        <div className="bg-white rounded-t-3xl shadow-md w-[52rem] fixed z-50">
          <div className="flex w-full bg-gradient-to-r from-[#C557EF] rounded-t-3xl h-[84px] justify-between items-center">
            <h1 className="text-[24px] font-bold p-14 text-[#1E0057]">
              TO DO
            </h1>
            <button
              className="bg-[#744BE4] w-16 m-14 rounded-full h-9 shadow-md text-white hover:scale-105"
              onClick={handleAddClick}
            >
              {isAdding ? "Cancel" : "Add"}
            </button>
          </div>
        </div>
        <div className="mt-[84px]">
          {isAdding ? (
            <TextArea setList={updateList} setIsAdding={setIsAdding} />
          ) : (
            ""
          )}
        </div>
        <div>
          {list.map((item) => (
            <Tile
              heading={item.heading}
              date={item.date}
              key={item.id}
              id={item.id}
              setList={updateList}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Container;