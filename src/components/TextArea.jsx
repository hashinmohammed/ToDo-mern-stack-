import React, { useState } from "react";
import axios from "axios";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
function TextArea(props) {
  const [formData, setFormData] = useState({
    date: "",
    heading: "",
    description: "",
    id: "",
  });
  const [formDatas, setFormDatas] = useState([]);
  useEffect(() => {
    const list = localStorage.getItem("todos");
    if (list) {
      setFormDatas(JSON.parse(list)); // parse the list string back to an array
    }
  }, []);

  const handleChange = (e) => {
    // console.log(e.target)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    formData.id = id;
    const newDatas = [ formData,...formDatas];
    setFormDatas(newDatas);
    localStorage.setItem("todos", JSON.stringify(newDatas)); // update local storage with updated formDatas
    setFormData({ date: "", heading: "", description: "" });
  };
  // const [cancel,setCancel]=useState(true)
  // function handleSetCancel(){
  //   setCancel(false)
  // }

  return (
    <div className="flex">
      <div
        id="main"
        className="bg-[#FFFFFF] w-full h-3/4 z-30 mx-10  duration-1000"
      >
        <nav className="bg-gradient-to-l from-[#87E3FA] h-12">
          <span>
            <MdOutlinePlaylistAdd className="text-4xl text-slate-400 ml-6" />
          </span>
        </nav>
        <div className="flex shadow-2xl rounded-b-3xl">
          <img
            className="h-[18rem] rounded-3xl"
            src="https://img.freepik.com/free-vector/designer-girl-concept-illustration_114360-4455.jpg?w=740&t=st=1679598246~exp=1679598846~hmac=b4d18236a8544ad3307c0359940b3b2465eaa8c3961dee029bde6d594f50441d"
            alt=""
          />

          <form
            className="flex flex-col gap-5 w-3/4 items-center justify-center p-5 "
            onSubmit={handleSubmit}
          >
            <input
              className=" border-gray-300  border-2 rounded-3xl px-6 w-full  focus:outline-none  uppercase text-blue-400 focus:shadow-lg"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              className=" h-10 border-2 border-gray-300 rounded-3xl p-6 w-full  focus:outline-none text-blue-400 bg-white focus:shadow-lg"
              type="text"
              name="heading"
              placeholder="Heading"
              value={formData.heading}
              onChange={handleChange}
              required
            />

            <input
              className="h-20 border-2 border-gray-300 rounded-3xl p-6 w-full  text-blue-400 focus:outline-none  focus:shadow-lg bg-white"
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleChange}
              value={formData.description}
              required
            />
            <div className="flex gap-6">
              <button
                className="ml-12 p-2 px-4 rounded-3xl bg-[#F3DBFB] hover:scale-110 text-slate-400"
                type="submit"
              >
                Add
              </button>
              <button
                className="bg-[#F3DBFB] p-2 rounded-3xl text-slate-400 hover:scale-110"
              
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TextArea;
