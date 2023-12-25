import React from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
const Card = ({ to, from, time, rate, bal }) => {
  return (
    <div className=" rounded-lg bg-white text-black p-5 w-11/12 mt-5 shadow-md">
      <div className="flex">
        <div className=" w-full flex justify-center  items-center space-x-2">
          <h1 className="text-white bg-green-500  text-2xl w-max font-bold shadow-2xl px-4 py-2   rounded-full text-center">
            {to.charAt()}
          </h1>
          <h1 className="w-full text-lg font-semibold">{to}</h1>
        </div>
      </div>
    </div>
  );
};
const Statement = () => {
  return (
    <div className="w-full over  px-2 py-5 flex flex-col relative h-full items-center ">
      <div className="my-2 flex justify-center items-center space-x-2 z-50 w-3/4">
        <label htmlFor="search" className="text-black">
          Search:
        </label>
        <input
          id="search"
          type="text"
          className="px-2 py-2 rounded-lg shadow-md w-full "
          placeholder="Search Contact..."
        />
      </div>
      <Card to={"Ayan Siddiquie"} />
      <Card to={"Ram Shrestha"} />
      <Card to={"Ayan Siddiquie"} />
      <Card to={"Ram Shrestha"} />
      <Card to={"Ayan Siddiquie"} />
      <Card to={"Ram Shrestha"} />
    </div>
  );
};

export default Statement;
